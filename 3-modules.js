const name = require('./4-names.js');
const sayHi = require('./5-util.js');
const data= require('./6-alternative-syntax.js');
require('./7-mindgrenade.js');
console.log(data);
sayHi('susan');
sayHi(name.john);
sayHi(name.peter);