import * as BB from 'bluebird'
import * as fs from 'fs'
import { inject, injectable } from 'inversify'

@injectable()
export class FsAsyncFactory {

    private fsAsync: any = null

    public getFsAsync(): any {

        if (this.fsAsync === null) {
            this.fsAsync = BB.promisifyAll(fs)
        }

        return this.fsAsync
    }

}

export default FsAsyncFactory
