const util = require('../util');

const text = util.readInputTxt('d3');

const getAlphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1 //https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript

const getPriority = (s) =>{
    let val = getAlphaVal(s);

    if(s.toUpperCase() === s){
        val+= 26;
    }

    return val;
}

let prioritySum = 0;


text.forEach(item => {
    const firstPart = item.slice(0,item.length/2);
    const secondPart = item.slice(item.length / 2,item.length);

    let repeatedItem;

    secondPart.split("").forEach((char)=>{
        if(firstPart.includes(char)){
            repeatedItem = char;
        }
    })

    prioritySum+= getPriority(repeatedItem);
});

console.log({prioritySum})