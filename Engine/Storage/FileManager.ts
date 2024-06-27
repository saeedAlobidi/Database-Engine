
import { IOEither } from "fp-ts/lib/IOEither";
import { FileOperation } from "./Types";
const fs = require('fs');


export class FileManager implements  FileOperation{



    read(): IOEither<Error, string> {
        throw new Error("Method not implemented.");
    

    }
    write(data: string): IOEither<Error, string> {
        throw new Error("Method not implemented.");
    }
    delete(): IOEither<Error, string> {
        throw new Error("Method not implemented.");
    }

}