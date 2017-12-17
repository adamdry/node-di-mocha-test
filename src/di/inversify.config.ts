import { Container } from 'inversify'
import { ConfigHelper } from '../config/ConfigHelper'
import { IConfigHelper } from '../config/IConfigHelper'
import { FsAsyncFactory } from '../fs/FsAsyncFactory'
import { IFsAsyncFactory } from '../fs/IFsAsyncFactory'
import { IRedisAdapter } from '../redis/IRedisAdapter'
import { RedisAdapter } from '../redis/RedisAdapter'
import { TYPES } from './types'

const myContainer: Container = new Container()
myContainer.bind<IFsAsyncFactory>(TYPES.IFsAsyncFactory).to(FsAsyncFactory)
myContainer.bind<IConfigHelper>(TYPES.IConfigHelper).to(ConfigHelper)
myContainer.bind<IRedisAdapter>(TYPES.IRedisAdapter).to(RedisAdapter)

export { myContainer }
