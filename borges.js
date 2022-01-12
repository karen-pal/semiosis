// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":"."}]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"ñ"}, {"literal":"a"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"e"}, {"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"j"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"p"}, {"literal":"i"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"j"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"L"}, {"literal":"e"}, {"literal":"j"}, {"literal":"o"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"á"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD$string$4", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "OBJ", "_", "MOD$string$4"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5"]},
    {"name": "MOD$string$6", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$6", "_", "SENTENCE"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":" "}, {"literal":"q"}, {"literal":"u"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"b"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"a"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "_", "symbols": [{"literal":" "}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
