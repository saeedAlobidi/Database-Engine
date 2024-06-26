
// Define function types

import { TupleType } from "./Base";
import * as O from 'fp-ts/Option'
import {Page} from "./Page";


export type SizeOfTuple = (data: TupleType)
    => number;


export type ExceedTubleSize = (sizeOfTuple: number, page: Page)
    => O.Option<Page>;

export type AddTupleToPage = (tuple: TupleType, page: Page)
    => Page;


