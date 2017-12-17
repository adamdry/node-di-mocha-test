import { inject, injectable } from 'inversify'
import { TYPES } from '../di/types'
import FsAsyncFactory from '../fs/FsAsyncFactory'

@injectable()
export class ConfigHelper {

    @inject(TYPES.IFsAsyncFactory)
    private readonly fsAsyncFactory: FsAsyncFactory

    public async primeCacheObj(): Promise<any> {

        const fsAsync: any = this.fsAsyncFactory.getFsAsync()
        const fileContents: string = await fsAsync.readFileAsync('./testData/testFile.json')

        return JSON.parse(fileContents)
    }

}

export default ConfigHelper
