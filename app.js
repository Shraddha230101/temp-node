const k = require('lodash');

const items = [1, [2,[3,[4]]]];
const newitems = k.flattenDeep(items);

console.log(newitems);