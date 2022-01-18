// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const moo = require("moo");

const lexer = moo.compile({
  ws:     /[ \t]+/,
  number: /[0-9]+/,
  word: { match: /[a-z]+/, type: moo.keywords({ times: "x" }) },
  times:  /\*/
});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "expr", "symbols": ["multiplication"], "postprocess": id},
    {"name": "expr", "symbols": ["trig"], "postprocess": id},
    {"name": "multiplication", "symbols": [(lexer.has("number") ? {type: "number"} : number), (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("times") ? {type: "times"} : times), (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([first, , , , second]) => [first, second, first * second]},
    {"name": "trig", "symbols": [{"literal":"sin"}, (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([, , x]) => Math.sin(x)}
]
  , ParserStart: "expr"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
