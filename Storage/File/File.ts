import { Config } from "../../Configuration";
import Page from "../Page/page";
import FilesOperation from "./FilesOperation";
import PageInfo from "./PageInfo";

export default class File<K, V> {


    private  Dictionary: Map<number, PageInfo> ;
    private numberOfPages: number = Config.NUMBER_OF_PAGE_FILE;

    private encoder: TextEncoder;
    constructor(private filesOperation: FilesOperation) {
        this.encoder = new TextEncoder();
        this.Dictionary = new Map();
    }

    //***[page1][page2]
    public savetPage = (data: Page<K, V>): boolean =>
     {
           this.Dictionary.set(data.pageNumber,new PageInfo(data.tableName,data.remainedSize()));
          
           return this.filesOperation.Write(this.encoder.encode(JSON.stringify(data)))
     } 
        
     
}


