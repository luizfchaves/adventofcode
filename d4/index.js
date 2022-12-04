const util = require('../util');
const text = util.readInputTxt('d4');

let fullyContainedAssignments = 0;

text.forEach(item => {
    const firstElfConstrains = {}
    const secondElfConstrains = {}

    let pairConstrains = item.split(',');

    firstElfConstrains.start = pairConstrains[0].split("-")[0]
    firstElfConstrains.end = pairConstrains[0].split("-")[1]
    secondElfConstrains.start = pairConstrains[1].split("-")[0]
    secondElfConstrains.end = pairConstrains[1].split("-")[1]


    const firstItems = [];
    const secondItems = [];


    for(
        let i=Math.min(firstElfConstrains.start,secondElfConstrains.start);
        i<=Math.max(firstElfConstrains.end,secondElfConstrains.end);
        i++
    ){

        if(i>= firstElfConstrains.start && i<= firstElfConstrains.end){
            firstItems.push(i)
        }
        if(i>= secondElfConstrains.start && i<= secondElfConstrains.end){
            secondItems.push(i)
        }
    }

    const secondArrayFullyContainsFirst = firstItems.some(item=>secondItems.includes(item));
    const firstArrayFullyContainsSecond = secondItems.some(item=>firstItems.includes(item));

    if(
        firstArrayFullyContainsSecond
        || secondArrayFullyContainsFirst
    ){
        fullyContainedAssignments+= 1;
    }

});

console.log({fullyContainedAssignments})