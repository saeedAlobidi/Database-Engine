import { Config } from "../../Configuration";
import Tuple from "./Tuple";

export type TupleType<K,V> = Tuple<K,V> | Map<K,V>;
export default class Base{

    // page header
  public  pageNumber:number=0;
  public  tableName :String;
  public  pageSize:number=Config.PAGE_SIZE;
  public  usedSize :number=0;
 
  }

  
