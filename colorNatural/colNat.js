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
 function AZULFUN (d) { 
                return {
                    d: d,
                    hue: 240,
                    saturation: 100,
                    lightness: 50
                }; } 
 function ACLARAR ([d1,,d2]) { 
                return {
                    d1: d1,
                    hue: d1[0].hue,
                    saturation: d1[0].saturation,
                    lightness: d1[0].lightness + 50
                }; } 
 function OSCURECER ([d1,,d2]) { 
                return {
                    d1: d1,
                    hue: d1[0].hue,
                    saturation: d1[0].saturation,
                    lightness: d1[0].lightness - 50
                }; } 
 function SATURAR ([d1,,d2]) { 
                console.log(d1,typeof(d1[0][0].d));
                if (typeof(d1[0][0].d[0]) === 'string'){
                    return {
                    d1: d1[0][0].d[0],
                    hue: d1[0][0].hue,
                    saturation: d1[0][0].saturation + 50,
                    lightness: d1[0][0].lightness

                    };
                }
                return {
                    d1: d1,
                    hue: d1[0].hue,
                    saturation: d1[0].saturation + 50,
                    lightness: d1[0].lightness
                }; } 
 function DESATURAR ([d1,,d2]) { 
                if (typeof(d1[0][0].d[0]) === 'string'){
                    return {
                    d1: d1[0][0].d[0],
                    hue: d1[0][0].hue,
                    saturation: d1[0][0].saturation - 50,
                    lightness: d1[0][0].lightness

                    };
                }
                return {
                    d1: d1,
                    hue: d1[0].hue,
                    saturation: d1[0].saturation - 50,
                    lightness: d1[0].lightness
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
    {"name": "main", "symbols": ["Saturacion"]},
    {"name": "Saturacion", "symbols": ["FUERTE"]},
    {"name": "Saturacion", "symbols": ["APAGADO"]},
    {"name": "Saturacion", "symbols": ["Luz"]},
    {"name": "Luz", "symbols": ["CLARO"]},
    {"name": "Luz", "symbols": ["OSCURO"]},
    {"name": "Luz", "symbols": ["Hue"]},
    {"name": "Hue", "symbols": ["ROJO"]},
    {"name": "Hue", "symbols": ["VERDE"]},
    {"name": "ROJO$string$1", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"j"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROJO", "symbols": ["ROJO$string$1"], "postprocess": ROJOFUN},
    {"name": "VERDE$string$1", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERDE", "symbols": ["VERDE$string$1"], "postprocess": VERDEFUN},
    {"name": "AZUL$string$1", "symbols": [{"literal":"a"}, {"literal":"z"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AZUL", "symbols": ["AZUL$string$1"], "postprocess": AZULFUN},
    {"name": "CLARO$string$1", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLARO", "symbols": ["Hue", "_", "CLARO$string$1"], "postprocess": ACLARAR},
    {"name": "OSCURO$string$1", "symbols": [{"literal":"o"}, {"literal":"s"}, {"literal":"c"}, {"literal":"u"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OSCURO", "symbols": ["Hue", "_", "OSCURO$string$1"], "postprocess": OSCURECER},
    {"name": "FUERTE$string$1", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FUERTE", "symbols": ["Luz", "_", "FUERTE$string$1"], "postprocess": SATURAR},
    {"name": "APAGADO$string$1", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "APAGADO", "symbols": ["Luz", "_", "APAGADO$string$1"], "postprocess": DESATURAR}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
