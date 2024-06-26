
// Define function types

import { TupleType } from "./Base";
import * as O from 'fp-ts/Option'
import Page from "./page";


export type SizeOfTuple = <K, V>(data: TupleType<K, V>)
    => number;


export type ExceedTubleSize = <K, V>(sizeOfTuple: number, page: Page<K, V>)
    => O.Option<Page<K, V>>;

export type AddTupleToPage = <K, V>(tuple: TupleType<K, V>, page: Page<K, V>)
    => Page<K, V>;


