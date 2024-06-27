
type ColumnValueType = number | string;


export   class Columns{
 constructor( public key: ColumnValueType,public value:ColumnValueType){}
 
}
export   class Tuple {
   constructor( public uid: number,public row:Columns[]){}
  }