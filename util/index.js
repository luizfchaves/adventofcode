const fs = require("fs");

const readInputTxt = (day) =>{
    console.log(__dirname)
    const text = fs.readFileSync(`${__dirname}/../${day}/input.txt`).toString('utf-8');;
    const textByLine = text.split("\r\n")

    return textByLine;
}

module.exports = {
    readInputTxt
}