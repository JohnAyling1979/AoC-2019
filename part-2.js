const lineReader = require('line-reader');

let sum = 0;

lineReader.eachLine('day1Input', (mass, last) => {
    sum += calculateTotalFuel(mass);

    if (last) {
        console.log(`The sum is ${sum}`);
    }
});

function calculateTotalFuel(mass) {
    const fuel = Math.floor(parseInt(mass) / 3) - 2

    if (fuel <= 0)
        return 0

    return fuel + calculateTotalFuel(fuel);
}