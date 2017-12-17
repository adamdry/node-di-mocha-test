interface IRedisAdapter {
    getDataAsStr(key: string): Promise<string>
}

export { IRedisAdapter }
