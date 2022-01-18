const nearley = require("nearley");
const grammar = require("./test.js");
let parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
parser.feed("4 x 3");
console.log(parser.results);
