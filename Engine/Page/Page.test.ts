import { sizeOfTuple, exceedTubleSize, addTupleToPage } from './Page';
import { Columns, Tuple } from './Tuple';

describe('page', () => {
    //1- Arrange
    var columns = [new Columns("id", 1), new Columns("name", "saeed")];
    var row = new Tuple(1, columns);

    test('calculate the size Of Tuple', () => {
        //2-Act
        let size = sizeOfTuple(row);
        let expectedSize = (new TextEncoder().encode(JSON.stringify(row)).length)
        //Assert
        expect(size).toBe(expectedSize);


    });

    // test('if the tupple exceed the size', () => {
    //     //todo 

    // });
});
