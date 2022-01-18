const nearley = require("nearley");
const grammar = require("./csscolor.js");

//cli
const readlineSync = require('readline-sync');
const  chalk  = require('chalk');

console.log(chalk)
let parser; 

// Read color from console
while (true) { 
    const color = readlineSync.question('Please write a css color: \n');
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar),{ keepHistory: true });
    try {
        parser.feed(color);
        let res = parser.results[0][0];
        let colorify;
        if (res["type"] === "hex") {
            colorify = chalk.hex(res["data"]);
        } else  if (res["type"]==="rgb"){
            colorify = chalk.rgb(res["r"],res["g"],res["b"]);
        } else{
            colorify = chalk.rgb(255,0,0)
        }
        console.log("entero: ", parser.results);
        console.log(colorify(res["type"]));
        console.log();
    } catch(parseError) {
        console.log(parseError);
        console.log("{!!!} Error at character " + parseError.offset)
    }
}
