
// Define function types

import { TupleType } from "./Base";
import * as O from 'fp-ts/Option'
import { Page } from "./Page";
import { IOEither } from "fp-ts/lib/IOEither";

export interface FileOperation {
    read(): IOEither<Error, string>;
    write(data: string): IOEither<Error, string>;
    delete(): IOEither<Error, string>;
}
export type Dictionary = { key: string; value: string; };

export type SizeOfTuple = (data: TupleType)
    => number;


export type ExceedTubleSize = (sizeOfTuple: number, page: Page)
    => O.Option<Page>;

export type AddTupleToPage = (tuple: TupleType, page: Page)
    => Page;

export type AddToDictionary = (pageId: String, ref: String)=>void;

export type GetPageIdFromDictionary = (pageId: String)=>O.Option<String>;

