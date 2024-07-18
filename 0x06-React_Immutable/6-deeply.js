import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  return map1.mergeDeep(map2);
}
const page1 = {
    'user-1': {
      id: 1,
      name: 'test',
      likes: {
        1: {
          uid: 1234,
        }
      }
    },
  };
  
  const page2 = {
    'user-1': {
      likes: {
        2: {
          uid: 134,
        }
      }
    },
  };
  let res = mergeDeeplyElements(page1, page2).toJS();
  console.log(res)
