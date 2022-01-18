
@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace

@{% function VERDEFUN (d) { 
                return {
                    d: d,
                    hue: 120,
                    saturation: 100,
                    lightness: 50
                }; } %}

@{% function ROJOFUN (d) { 
                return {
                    d: d,
                    hue: 0,
                    saturation: 100,
                    lightness: 50
                }; } %}

@{% function TEST (d) { 
                return {
                    d: d,
                    v: d[0][0].hue
                }; } %}
main -> Hue {% TEST %}

Saturacion -> Luz _ "fuerte" | Luz _ "apagado" | Luz 
Luz -> Hue _ "claro" | Hue _ "oscuro" | Hue
Hue -> ROJO | VERDE 

ROJO -> "rojo" {% ROJOFUN %}

VERDE -> "verde" {% VERDEFUN %}
