
interface columns<K,V>{
  key: K;
  value: V;
}
export default interface Tuple<K,V> {
    uid: number;
   row:columns<K,V>[],
  }