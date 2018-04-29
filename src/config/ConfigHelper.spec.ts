import { expect } from 'chai'
import 'mocha'
import 'reflect-metadata'
import ConfigHelper from './ConfigHelper'

describe('ConfigHelper primeCacheObj', () => {
    it('test test123', async () => {

        // need to create mocked

        const configHelper: ConfigHelper = new ConfigHelper()

        const fileContents: string = await configHelper.primeCacheObj()

        expect(JSON.stringify(fileContents)).to.equal('{"isTestFile":false}')

    })

})
