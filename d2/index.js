const util = require('../util');

const text = util.readInputTxt('d2');

const rock = {
    name: 'rock',
    points: 1,
}

const paper = {
    name: 'paper',
    points: 2,
    wins: rock,
}

const scissors = {
    name: 'scissors',
    points: 3,
    wins: paper,
    loses: rock,
}

paper.loses = scissors;

rock.wins = scissors;
rock.loses = paper;

const firstDict = {
    'A' : rock,
    'B' : paper,
    'C' : scissors
}

const secondDict = {
    // Precisa ser o contrário pra dar oq eu preciso escolher
    'X' : 'wins',
    'Y' : 'draw',
    'Z' : 'loses',
}

const DRAW_POINTS = 3;
const WIN_POINTS = 6;


let secondPersonPoints = 0;

text.forEach(item => {
    const choices = item.split(' ');

    const firstPersonChoice = firstDict[choices[0]];

    const secondPersonResult = secondDict[choices[1]];
    let secondPersonChoice = firstPersonChoice[secondPersonResult] ?? firstPersonChoice;

    secondPersonPoints += secondPersonChoice.points;

    if(firstPersonChoice.wins === secondPersonChoice){
        //perdi
        return;
    }
    
    if(secondPersonChoice.wins === firstPersonChoice){
        //venci
        secondPersonPoints += WIN_POINTS;
        return
    }
    
    //empatei
    secondPersonPoints += DRAW_POINTS;
});

console.log({secondPersonPoints})