import { expect } from 'chai'
import { decorate, injectable } from 'inversify'
import 'mocha'
import 'reflect-metadata'
import * as TypeMoq from 'typemoq'
import { IMock } from 'typemoq/_all'
import { myContainer } from '../di/inversify.config'
import { TYPES } from '../di/types'
import { IFsAsyncFactory } from '../fs/IFsAsyncFactory'
import { IConfigHelper } from './IConfigHelper'
//import { IRedisAdapter } from '../redis/IRedisAdapter';

function createStubClass<TStub>(memberOverrides: any): TStub {
    const stub: any = {}

    for (const memberName of Object.keys(memberOverrides)) {
        stub[memberName] = memberOverrides[memberName]
    }

    return stub as TStub
}

describe('ConfigHelper primeCacheObj', () => {
    it('test test123', async () => {

        // get an instance of config helper but inject my own versions of dependencies
        //      with stubbed methods

        // create stubbed IFsAsyncFactory
        // class FsAsyncFactoryStub implements IFsAsyncFactory {
        //    I decided to not implement the interface as adding to the interface
        //      will require me to update all the tests that mock that class
        @injectable()
        class FsAsyncFactoryStub implements IFsAsyncFactory {
            public getFsAsync(): any {
                return {
                    readFileAsync: async (): Promise<string> => {
                        return new Promise<string>((resolve: (data: string) => void): void => {

                            const mockedFileContents: any = {
                                isTestFile: false
                            }

                            resolve(JSON.stringify(mockedFileContents))
                        })
                    }
                }
            }
        }

        const fsAsyncFactoryStub2: IMock<IFsAsyncFactory> = TypeMoq.Mock.ofType<IFsAsyncFactory>()
        decorate(injectable(), fsAsyncFactoryStub2.object.constructor)
        const fsAsync: any = fsAsyncFactoryStub2.object.getFsAsync()
        console.log('@@@ fsAsync: ', fsAsync)

        // create stubbed RedisAdapter
        // @injectable()
        // class RedisAdapterStub implements IRedisAdapter {

        // }

        myContainer.unbind(TYPES.IFsAsyncFactory)
        myContainer.bind<IFsAsyncFactory>(TYPES.IFsAsyncFactory)
            .to(fsAsyncFactoryStub2.object.constructor as {
                new (...args: any[]): IFsAsyncFactory
            })

        const configHelper: IConfigHelper = myContainer.get<IConfigHelper>(TYPES.IConfigHelper)

        const fileContents: string = await configHelper.primeCacheObj()
        console.log(JSON.stringify(fileContents, null, 4))
        expect(JSON.stringify(fileContents)).to.equal('{"isTestFile":false}')

    })

})
