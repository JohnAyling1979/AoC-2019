const lineReader = require('line-reader');

let sum = 0;

lineReader.eachLine('day1Input', (mass, last) => {
    sum += Math.floor(parseInt(mass) / 3) - 2

    if (last) {
        console.log(`The sum is ${sum}`);
    }
});