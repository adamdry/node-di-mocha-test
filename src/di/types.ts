const TYPES: {
    // this is for intellisense
    IConfigHelper: symbol,
    IFsAsyncFactory: symbol,
    IRedisAdapter: symbol
} = {
    IConfigHelper: Symbol.for('IConfigHelper'),
    IFsAsyncFactory: Symbol.for('IFsAsyncFactory'),
    IRedisAdapter: Symbol.for('IRedisAdapter')
}

export { TYPES }
