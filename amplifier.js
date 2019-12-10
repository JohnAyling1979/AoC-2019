function amplifier(phaseSetting, input) {
    const dataString = '3,8,1001,8,10,8,105,1,0,0,21,38,59,84,97,110,191,272,353,434,99999,3,9,1002,9,2,9,101,4,9,9,1002,9,2,9,4,9,99,3,9,102,5,9,9,1001,9,3,9,1002,9,5,9,101,5,9,9,4,9,99,3,9,102,5,9,9,101,5,9,9,1002,9,3,9,101,2,9,9,1002,9,4,9,4,9,99,3,9,101,3,9,9,1002,9,3,9,4,9,99,3,9,102,5,9,9,1001,9,3,9,4,9,99,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,99';
    const data = dataString.split(',').map(num => parseInt(num));
    const stream = [phaseSetting, input];
    let pointer = 0;
    let opCodeLoc = 0;

    while(data[opCodeLoc] !== 99)
    {
        let opCode = data[opCodeLoc].toString();
        let num1Loc = data[opCodeLoc + 1];
        let num2Loc = data[opCodeLoc + 2];
        let saveLoc = data[opCodeLoc + 3];
        let opCodeArray = [];

        for (var i = 0; i < 5; i++)
        {
            opCodeArray.push('0');
        }

        if (opCode.length > 1)
        {
            for (var i = 0; i < 5; i++)
            {
                opCodeArray[4 - i] = opCode[opCode.length - 1 - i] || '0';
            }
        }
        else
        {
            opCodeArray[4] = opCode[0];
        }

        let num1 = opCodeArray[2] === '0' ? data[num1Loc] : num1Loc;
        let num2 = opCodeArray[1] === '0' ? data[num2Loc] : num2Loc;

        switch(opCodeArray[4])
        {
            case '1':
                if (opCodeArray[0] === '0')
                {
                    data[saveLoc] = num1 + num2;
                }
                else
                {
                    saveLoc = num1 + num2
                }
                opCodeLoc+=4;
                break;
            case '2':
                if (opCodeArray[0] === '0')
                {
                    data[saveLoc] = num1 * num2;
                }
                else
                {
                    saveLoc = num1 * num2;
                }
                opCodeLoc+=4;
                break;
            case '3':
                data[num1Loc] = stream[pointer];
                pointer++;
                opCodeLoc+=2;
                break;
            case '4':
                return num1;
                break;
            case '5':
                if (num1 !== 0)
                {
                    opCodeLoc = num2;
                }
                else
                {
                    opCodeLoc += 3;
                }
                break;
            case '6':
                if (num1 === 0)
                {
                    opCodeLoc = num2;
                }
                else
                {
                    opCodeLoc += 3;
                }
                break;
            case '7':
                if (opCodeArray[0] === '0')
                {
                    data[saveLoc] = num1 < num2 ? 1 : 0;
                }
                else
                {
                    saveLoc = num1 < num2 ? 1 : 0;
                }
                opCodeLoc+=4;
                break;
            case '8':
                if (opCodeArray[0] === '0')
                {
                    data[saveLoc] = num1 === num2 ? 1 : 0;
                }
                else
                {
                    saveLoc = num1 === num2 ? 1 : 0;
                }
                opCodeLoc+=4;
                break;
        }
    }
}

exports.amplifier = amplifier;