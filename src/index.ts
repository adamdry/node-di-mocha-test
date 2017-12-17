import 'reflect-metadata'
import { IConfigHelper } from './config/IConfigHelper'
import { myContainer } from './di/inversify.config'
import { TYPES } from './di/types'
import { FsAsyncFactory } from './fs/FsAsyncFactory'

//const configHelper: ConfigHelper = new ConfigHelper()
//console.log(configHelper.fsAsyncFactory)

const configHelper: IConfigHelper = myContainer.get<IConfigHelper>(TYPES.IConfigHelper);

(async (): Promise<void> => {
    const fileContents: string = await configHelper.primeCacheObj()
    console.log(JSON.stringify(fileContents, null, 4))

    // testing singleton scope
    console.log(configHelper.blah) // should be null
    configHelper.blah = '1 set from index'
    console.log(configHelper.blah) // should be 1 set from index

    const configHelper2: IConfigHelper = myContainer.get<IConfigHelper>(TYPES.IConfigHelper)
    console.log(configHelper2.blah) // if in singleton mode should be 1 set from index
    configHelper2.blah = 'set again!'
    console.log(configHelper.blah) // should be set again! even though we set it on the other instance
})()
