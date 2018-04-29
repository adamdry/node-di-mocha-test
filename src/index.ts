//import { setInterval } from 'timers'
import ConfigHelper from './config/ConfigHelper'

const configHelper: ConfigHelper = new ConfigHelper()
configHelper.testOutput()
console.log(configHelper.fsAsyncFactory)

// the above console log outputs:

// .../internalprojects/node-di-mocha-test/node_modules/typescript-ioc/es5.js:137
// throw new TypeError('Invalid type requested to IoC ' +
// ^

// TypeError: Invalid type requested to IoC container. Type is not defined.
// at checkType (.../internalprojects/node-di-mocha-test/node_modules/typescript-ioc/es5.js:137:15)
// at Function.IoCContainer.bind (.../internalprojects/node-di-mocha-test/node_modules/typescript-ioc/es5.js:98:9)
// at Function.IoCContainer.get (.../internalprojects/node-di-mocha-test/node_modules/typescript-ioc/es5.js:108:35)
// at ConfigHelper.get [as fsAsyncFactory] (.../internalprojects/node-di-mocha-test/node_modules/typescript-ioc/es5
//                                                                                              .js:119:85)
// at Object.<anonymous> (.../internalprojects/node-di-mocha-test/dist/index.js:5:25)
// at Module._compile (module.js:624:30)
// at Object.Module._extensions..js (module.js:635:10)
// at Module.load (module.js:545:32)
// at tryModuleLoad (module.js:508:12)
// at Function.Module._load (module.js:500:3)

// TEST CODE:
// (async (): Promise<void> => {
//     const configObj: any = await configHelper.primeCacheObj()

//     console.log('configObj\n', JSON.stringify(configObj, null, 4))
// })()
