# Match a CSS color
# http://www.w3.org/TR/css3-color/#colorunits
@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace
@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives
csscolor -> "#" hexdigit hexdigit hexdigit hexdigit hexdigit hexdigit {% ([type,h1,h2,h3,h4,h5,h6]) => [{"type":"hex","data":h1+h2+h3+h4+h5+h6}] %}
          | "#" hexdigit hexdigit hexdigit {% ([type,h1,h2,h3]) => [{"type":"hex", "data":h1+h2+h3}] %}
          | "rgb"  _ "(" _ colnum _ "," _ colnum _ "," _ colnum _ ")" {% ([type,ws1,par1,ws2,r,ws3,comma1,ws4,g,ws5,comma2,ws6,b,ws7,par2]) => [{"type":"rgb","r":r,"g":g,"b":b}] %}
          | "hsl"  _ "(" _ colnum _ "," _ colnum _ "," _ colnum _ ")"
          | "rgba" _ "(" _ colnum _ "," _ colnum _ "," _ colnum _ "," _ decimal _ ")" {% ([type,ws1,par1,ws2,r,ws3,comma1,ws4,g,ws5,comma2,ws6,b,ws7,comma3,alpha,ws8,par2]) => [{"type":"rgb","r":r,"g":g,"b":b}] %}
          | "hsla" _ "(" _ colnum _ "," _ colnum _ "," _ colnum _ "," _ decimal _ ")"
          | "draw" {% ([type]) => [{"type":"draw_inst", "data":""}] %}
hexdigit -> [a-fA-F0-9] {% ([hex]) => hex.toString() %}
colnum   -> int | percentage
