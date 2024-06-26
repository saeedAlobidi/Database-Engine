import * as O from 'fp-ts/Option'
import Base, { TupleType } from "./Base";
import { AddTupleToPage, ExceedTubleSize, SizeOfTuple } from './Types';
import { pipe } from 'fp-ts/lib/function';
export  class Page extends Base {

    public tuple: TupleType[];
    public addtTuple(data: TupleType): Page {
        this.tuple.push(data);
        return this;
    }

}


 
export const sizeOfTuple: SizeOfTuple = (data: TupleType) =>
    (new TextEncoder().encode(JSON.stringify(data)).length);

export const exceedTubleSize: ExceedTubleSize = (sizeOfTuple: number, page: Page) =>
    page.usedSize + sizeOfTuple >= page.pageSize ? O.some(page) : O.none;

export const addTupleToPage: AddTupleToPage = (tuple: TupleType, page: Page) =>
    pipe(
        sizeOfTuple(tuple),// tupleSize
        tupleSize => exceedTubleSize(tupleSize, page),// O.Option<Page>
        O.fold(() => new Page(), _page => _page),// Page
        _page => _page.addtTuple(tuple)// Page after add tuple

    )