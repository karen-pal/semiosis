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
        let colorify;
        if (parser.results[0][0] === "#") {
            colorify = chalk.hex(color);
        } else {
            col = parser.results[0]
            console.log(col)
            colorify = chalk.rgb(255,255,255)
        }
        console.log(colorify(parser.results));
        console.log();
    } catch(parseError) {
        console.log(parseError);
        console.log("{!!!} Error at character " + parseError.offset)
    }
}
