const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');;
const textByLine = text.split("\n")

const caloriesList = [];
let currentCalories = 0;

textByLine.forEach(currentText=>{
    const calories = parseInt(currentText);

    
    if(Number.isNaN(calories)){ // Pulou linha
        caloriesList.push(currentCalories);
        currentCalories = 0;
        return
    }
    
    currentCalories += calories;
});

const caloriesListSorted = caloriesList.sort();
const caloriesLength = caloriesList.length;

console.log(
    caloriesListSorted[caloriesLength-1]+
    caloriesListSorted[caloriesLength-2]+
    caloriesListSorted[caloriesLength-3]
);
