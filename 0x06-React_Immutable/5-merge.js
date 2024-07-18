import { List, Map } from 'immutable';

export default function concatElements(page1, page2) {
    return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
    return List(Map(page1).merge(Map(page2)).values());
}

// for tetsing
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 20, c: 30, d: 40 };

console.log(concatElements(array1, array2).toArray()); 
console.log(mergeElements(object1, object2).toArray()); 
