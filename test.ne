@{%
const moo = require("moo");

const lexer = moo.compile({
  ws:     /[ \t]+/,
  number: /[0-9]+/,
  word: { match: /[a-z]+/, type: moo.keywords({ times: "x" }) },
  times:  /\*/
});
%}

# Pass your lexer object using the @lexer option:
@lexer lexer

expr -> multiplication {% id %} | trig {% id %}

# Use %token to match any token of that type instead of "token":
multiplication -> %number %ws %times %ws %number {% ([first, , , , second]) => [first, second, first * second] %}

# Literal strings now match tokens with that text:
trig -> "sin" %ws %number {% ([, , x]) => Math.sin(x) %}
