import { inject, injectable } from 'inversify'
import { TYPES } from '../di/types'
import { IFsAsyncFactory } from '../fs/IFsAsyncFactory'
import { IRedisAdapter } from '../redis/IRedisAdapter'
import { IConfigHelper } from './IConfigHelper'

@injectable()
export class ConfigHelper implements IConfigHelper {

    public blah: string = null

    @inject(TYPES.IFsAsyncFactory)
    private readonly fsAsyncFactory: IFsAsyncFactory
    @inject(TYPES.IRedisAdapter)
    private readonly redisAdapter: IRedisAdapter

    public async primeCacheObj(): Promise<any> {

        const fsAsync: any = this.fsAsyncFactory.getFsAsync()
        const fileContents: string = await fsAsync.readFileAsync('./testData/testFile.json')

        // read something from redis
        const redisData: string = await this.redisAdapter.getDataAsStr('someKey')
        console.log('### Redis data: ', redisData)

        return JSON.parse(fileContents)
    }

}

export default ConfigHelper
