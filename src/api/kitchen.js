import { call } from './api';

const totalMicrowaves = 3;

export default function () {
  return call('/kitchen').then((responseBody) => {
    return Object.assign({}, responseBody, {
      microwaves: Array(totalMicrowaves)
      .fill(undefined)
      .map((value, index) => index < responseBody.microwaves),
    });
  });
}
