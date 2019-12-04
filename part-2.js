function rule1(num) {
    let hasDoubleDigit = false;

    const numberSet = num.toString().split('');
    let triple = [];
    let doubleValue = '';
    for (let i = 0; i < numberSet.length - 2; i++) {
        let j = i + 1;
        let n = j + 1;
        if (
            (numberSet[i] === numberSet[j] && numberSet[j] !== numberSet[n] && !triple.includes(numberSet[j])) ||
            (numberSet[n] === numberSet[j] && numberSet[j] !== numberSet[i] && !triple.includes(numberSet[j]))
        ) {
            hasDoubleDigit = true;
            if (doubleValue === '') {
                doubleValue = numberSet[j];
            }
        }

        if (hasDoubleDigit && doubleValue !== numberSet[j]) {
            return true;
        }

        if (numberSet[i] === numberSet[j] && numberSet[j] === numberSet[n]) {
            triple.push(numberSet[i]);
            if (doubleValue === numberSet[j]) {
                hasDoubleDigit = false;
            }
        }
    }

    return hasDoubleDigit;
}

function rule2(num) {
    const numberSet = num.toString().split('');
    let previosNumber = 0;

    for (let i = 0; i < numberSet.length; i++) {
        if (parseInt(numberSet[i]) < previosNumber) {
            return false;
        }

        previosNumber = parseInt(numberSet[i]);
    }

    return true;
}

const low = 231832;
const high = 767346;
let count = 0;

for (let num = low; num <= high; num++) {
    if (rule1(num) && rule2(num)) {
        count++;
    }
}

console.log(`Number of passwords: ${count}`);