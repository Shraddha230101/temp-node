const { readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first,second);

//writeFileSync Method
writeFileSync(
    './content/results-sync.txt',
    `Here is the result: ${first} ,${second}`
);


//append method
writeFileSync(
    './content/results-sync.txt',
    `Here is the result: ${first} ,${second}`,
    {flag : 'a'}
); 