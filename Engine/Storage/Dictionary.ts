import { pipe } from "fp-ts/lib/function";
import { AddToDictionary, Dictionary, GetPageIdFromDictionary } from "./Types";
import * as O from 'fp-ts/Option'



let keyValueList: Dictionary[]


export const indexing: AddToDictionary = (pageId: String, ref: String) =>
  keyValueList.push( { key: "key1", value: "value1" })

export const getIndex: GetPageIdFromDictionary = (pageId: String) =>
  pipe(
    keyValueList.find(a=> a.key==(pageId)),
    a=> a?O.some(a.value):O.none
  )

