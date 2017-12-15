import {AutoWired, Inject} from 'typescript-ioc'
import FsAsyncFactory from '../fs/FsAsyncFactory'

export class ConfigHelper {

    @Inject
    public fsAsyncFactory: FsAsyncFactory

    public testOutput(): void {
        console.log('### ConfigHelper.testOutput')
    }

    // public async primeCacheObj(): Promise<any> {

    //     //const fsAsyncFactory: IFsAsyncFactory = new FsAsyncFactory()
    //     //const fsAsyncFactory: IFsAsyncFactory = Di.container.get<IFsAsyncFactory>(Di.TYPES.IFsAsyncFactory)

    //     const fsAsync: any = this.fsAsyncFactory.getFsAsync()
    //     const fileContents: string = await fsAsync.readFileAsync('./testData/testFile.json')

    //     return JSON.parse(fileContents)
    // }

}

export default ConfigHelper
