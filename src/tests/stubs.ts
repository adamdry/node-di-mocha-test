import { injectable } from 'inversify'
import { IFsAsyncFactory } from '../fs/IFsAsyncFactory'

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
