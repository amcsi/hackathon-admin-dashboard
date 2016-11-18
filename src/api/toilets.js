import { call } from './api';

const gender = 'men';

export default function () {
  return call('/toilets').then((responseBody) => {
    const toilets = [];
    const toiletsOfGender = responseBody[gender];
    for (let key in toiletsOfGender) {
      if (!toiletsOfGender.hasOwnProperty(key)) {
        continue;
      }
      let urinal = false;
      if (key.charAt(0) === 'u') {
        urinal = true;
      }
      toilets.push({urinal, available: !!toiletsOfGender[key]});
    }
    return toilets;
  });
}
