import { Container } from 'inversify'
import { ConfigHelper } from '../config/ConfigHelper'
import { FsAsyncFactory } from '../fs/FsAsyncFactory'
import { IFsAsyncFactory } from '../fs/IFsAsyncFactory'
import { TYPES } from './types'

const myContainer: Container = new Container()
myContainer.bind<IFsAsyncFactory>(TYPES.IFsAsyncFactory).to(FsAsyncFactory)
myContainer.bind<ConfigHelper>(TYPES.ConfigHelper).to(ConfigHelper)

export { myContainer }
