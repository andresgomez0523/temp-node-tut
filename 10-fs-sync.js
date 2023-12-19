const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/first.txt', 'utf8');

console.log(first, second);

console.log(require('fs'))

writeFileSync('./content/result-sync.txt', 'Here is the result : ' + first + ',' + second)
