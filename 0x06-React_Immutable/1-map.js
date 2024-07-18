import { Map } from 'immutable';

export default function getImmutableObject(object) {
    return Map(object);
}

const myObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
};

const immObject = getImmutableObject(myObject);
console.log(immObject);
