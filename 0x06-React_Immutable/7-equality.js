import { is, Map } from 'immutable';

export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
const map1 = new Map(
    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
  );
  const map2 = new Map(
    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
  );
  
  const res = areMapsEqual(map1, map2);
  console.log(res)