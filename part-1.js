function rule1(num) {
    const numberSet = num.toString().split('');

    for (let i = 0; i < numberSet.length - 1; i++) {
        let j = i + 1;
        if (numberSet[i] === numberSet[j]) {
            return true;
        }
    }

    return false;
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