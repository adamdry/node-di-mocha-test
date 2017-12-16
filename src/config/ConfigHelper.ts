import { inject, injectable } from 'inversify'
import FsAsyncFactory from '../fs/FsAsyncFactory'

@injectable()
export class ConfigHelper {

    @inject private readonly fsAsyncFactory: FsAsyncFactory

    // public async primeCacheObj(): Promise<any> {

    //     //const fsAsyncFactory: IFsAsyncFactory = new FsAsyncFactory()
    //     //const fsAsyncFactory: IFsAsyncFactory = Di.container.get<IFsAsyncFactory>(Di.TYPES.IFsAsyncFactory)

    //     const fsAsync: any = this.fsAsyncFactory.getFsAsync()
    //     const fileContents: string = await fsAsync.readFileAsync('./testData/testFile.json')

    //     return JSON.parse(fileContents)
    // }

}

export default ConfigHelper
