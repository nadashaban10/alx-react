import { List} from 'immutable';


export function getListObject(array) {
    return List(array)
}
export function addElementToList(list, element) {
    const ListedObject = getListObject(list);
    return ListedObject.push(element)
}
