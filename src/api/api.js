/* global fetch:false Headers:false */
const apiBaseUrl = 'http://10.100.10.112:8080';
const headers = new Headers({
});

export function call(uri) {
  const url = `${apiBaseUrl}${uri}`;
  return fetch(url, {
    headers,
    mode: 'cors',
  }).then((response) => {
    return response.json();
  });
};

export default {};
