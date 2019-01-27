
const other = (s = '') => console.log(s + ' this comes from the other.js file');

const sumMe = (a, b) => {
  let result = a + b;
  return result;
}

export {
  other,
  sumMe
}