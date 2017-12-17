import { inject, injectable } from 'inversify'
import { setTimeout } from 'timers'
import { TYPES } from '../di/types'
import { IRedisAdapter } from './IRedisAdapter'

@injectable()
export class RedisAdapter implements IRedisAdapter {

    public async getDataAsStr(key: string): Promise<string> {
        // pretend to connect to redis and get some data
        return new Promise<string>((resolve: (data: string) => void): void => {
            setTimeout(() => {
                return resolve('fake data from redis (prod code)')
            }, 10)
        })
    }

}

export default RedisAdapter
