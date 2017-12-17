import 'reflect-metadata'
import ConfigHelper from './config/ConfigHelper'
import { myContainer } from './di/inversify.config'
import { TYPES } from './di/types'
import { FsAsyncFactory } from './fs/FsAsyncFactory'

//const configHelper: ConfigHelper = new ConfigHelper()
//console.log(configHelper.fsAsyncFactory)

const configHelper: ConfigHelper = myContainer.get<ConfigHelper>(TYPES.ConfigHelper);

(async (): Promise<void> => {
    const fileContents: string = await configHelper.primeCacheObj()
    console.log(JSON.stringify(fileContents, null, 4))
})()
