export default interface FilesOperation{
 
    Write (data:Uint8Array):boolean;
    read ():Uint8Array;
    
}