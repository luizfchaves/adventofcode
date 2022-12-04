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

const ruckSacksByGroup = text.reduce((acc,curr)=>{
    let lastArray = acc[acc.length-1];

    if(lastArray.length === 3){
        acc[acc.length] = [];
        lastArray = acc[acc.length -1];
    }

    lastArray.push(curr);

    return acc;
},[[]])


ruckSacksByGroup.forEach(item => {
   const firstLine = item[0];
   const secondLine = item[1];
   const thirdLine = item[2];

   
   let repeatedItems = [];
   
   secondLine.split("").forEach(str=>{
       if(firstLine.includes(str)){
           repeatedItems.push(str)
        }
    });
    
    let badge;

    repeatedItems.forEach(str=>{
        if(thirdLine.includes(str)){
            badge = str
        }
    })

    prioritySum += getPriority(badge);
});

console.log({prioritySum})