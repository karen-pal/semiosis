// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
 function VERDEFUN (d) { 
                return {
                    d: d,
                    hue: 120,
                    saturation: 100,
                    lightness: 50
                }; } 
 function ROJOFUN (d) { 
                return {
                    d: d,
                    hue: 0,
                    saturation: 100,
                    lightness: 50
                }; } 
 function TEST (d) { 
                return {
                    d: d,
                    v: d[0][0].hue
                }; } var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "main", "symbols": ["Hue"], "postprocess": TEST},
    {"name": "Saturacion$string$1", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Saturacion", "symbols": ["Luz", "_", "Saturacion$string$1"]},
    {"name": "Saturacion$string$2", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Saturacion", "symbols": ["Luz", "_", "Saturacion$string$2"]},
    {"name": "Saturacion", "symbols": ["Luz"]},
    {"name": "Luz$string$1", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Luz", "symbols": ["Hue", "_", "Luz$string$1"]},
    {"name": "Luz$string$2", "symbols": [{"literal":"o"}, {"literal":"s"}, {"literal":"c"}, {"literal":"u"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Luz", "symbols": ["Hue", "_", "Luz$string$2"]},
    {"name": "Luz", "symbols": ["Hue"]},
    {"name": "Hue", "symbols": ["ROJO"]},
    {"name": "Hue", "symbols": ["VERDE"]},
    {"name": "ROJO$string$1", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"j"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROJO", "symbols": ["ROJO$string$1"], "postprocess": ROJOFUN},
    {"name": "VERDE$string$1", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERDE", "symbols": ["VERDE$string$1"], "postprocess": VERDEFUN}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
