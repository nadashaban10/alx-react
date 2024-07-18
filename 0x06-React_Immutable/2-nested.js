import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    const FormObject = fromJS(object);
    return FormObject.getIn(array, undefined);
        
}
const objectTest = accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first'])
console.log(objectTest);