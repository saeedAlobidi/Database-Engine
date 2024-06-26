import { sizeOfTuple, exceedTubleSize, addTupleToPage } from './Page';
import { Columns, Tuple } from './Tuple';

describe('page', () => {
    //1- Arrange
    var columns = [new Columns("id", 1), new Columns("name", "saeed mohammed saleh alabidi")];
    var row = new Tuple(1, columns);

    test('sizeOfTuple', () => {
        //2-Act
        let size = sizeOfTuple(row);
        //Assert
        expect(size).toBe(13);


    });

    test('if the tupple exceed the size', () => {
        //todo 

    });
});
