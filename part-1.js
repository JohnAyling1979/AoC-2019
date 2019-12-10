const a = require('./amplifier');
const b = require('./amplifier');
const c = require('./amplifier');
const d = require('./amplifier');
const e = require('./amplifier');

let settings = [0,1,2,3,4];
let max = 0;
let maxArray = [];

while (true) {
    let phaseSettingSequence = []
    for (let i = 0; i < 5; i++) {
        let randomLoc = Math.floor(Math.random() * settings.length);
        let value = settings.splice(randomLoc, 1)[0];

        phaseSettingSequence.push(value);
    }

    const result = e.amplifier(phaseSettingSequence[4],
        d.amplifier(phaseSettingSequence[3],
            c.amplifier(phaseSettingSequence[2],
                b.amplifier(phaseSettingSequence[1],
                    a.amplifier(phaseSettingSequence[0], 0)
                )
            )
        )
    );

    if (result > max) {
        max = result;
        maxArray = phaseSettingSequence;
        console.log(maxArray, max);
    }

    settings = [0,1,2,3,4];
}
