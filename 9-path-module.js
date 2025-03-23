const path = require('path');

console.log(path.sep);

//join method
const filepath = path.join('/content','subfolder','text.txt');
//const filepath = path.join('/content/','subfolder','text.txt');---- same answer---\content\subfolder\text.txt
console.log(filepath);

//basename
const base = path.basename(filepath);
console.log(base);

// resolve method
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);