const util = require('../util');

const text = util.readInputTxt('d2');

const rock = {
    points: 1,
}

const paper = {
    points: 2,
    counter: rock,
}

const scissors = {
    points: 3,
    counter: paper,
}

rock.counter = scissors;

const firstDict = {
    'A' : rock,
    'B' : paper,
    'C' : scissors
}

const secondDict = {
    'X' : rock,
    'Y' : paper,
    'Z' : scissors,
}

const DRAW_POINTS = 3;
const WIN_POINTS = 6;


let secondPersonPoints = 0;

text.forEach(item => {
    const choices = item.split(' ');

    const firstPersonChoice = firstDict[choices[0]];
    const secondPersonChoice = secondDict[choices[1]];

    secondPersonPoints += secondPersonChoice.points;

    if(firstPersonChoice.counter === secondPersonChoice){
        return;
    }

    if(secondPersonChoice.counter === firstPersonChoice){
        secondPersonPoints += WIN_POINTS;
        return
    }

    secondPersonPoints += DRAW_POINTS;
});

console.log({secondPersonPoints})