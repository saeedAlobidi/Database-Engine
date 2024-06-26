import * as O from 'fp-ts/Option'
import Base, { TupleType } from "./Base";
import { AddTupleToPage, ExceedTubleSize, SizeOfTuple } from './Types';
import { pipe } from 'fp-ts/lib/function';
export default class Page<K, V> extends Base {

    public tuple: TupleType<K, V>[];
    public addtTuple(data: TupleType<K, V>): Page<K, V> {
        this.tuple.push(data);
        return this;
    }

}


 
const sizeOfTuple: SizeOfTuple = <K, V>(data: TupleType<K, V>) =>
    (new TextEncoder().encode(JSON.stringify(data)).length);

const exceedTubleSize: ExceedTubleSize = <K, V>(sizeOfTuple: number, page: Page<K, V>) =>
    page.usedSize + sizeOfTuple >= page.pageSize ? O.some(page) : O.none;

const addTupleToPage: AddTupleToPage = <K, V>(tuple: TupleType<K, V>, page: Page<K, V>) =>
    pipe(
        sizeOfTuple(tuple),
        tupleSize => exceedTubleSize(tupleSize, page),// O.Option<Page<K, V>>
        O.fold(() => new Page<K, V>(), _page => _page),// Page<K, V>
        _page => _page.addtTuple(tuple)// Page<K, V> after add tuple

    )