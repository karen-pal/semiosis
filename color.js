const nearley = require("nearley");
const grammar = require("./csscolor.js");

const readlineSync = require('readline-sync');

let parser; 

// Read color from console
while (true) { 
    const color = readlineSync.question('Please write a css color: \n');
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar),{ keepHistory: true });
    try {
        parser.feed(color)
        console.log(parser.results);
    } catch(parseError) {
        console.log("{!!!} Error at character " + parseError.offset)
    }
}
