
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

@{% function ACLARAR ([d1,,d2]) { 
                return {
                    d1: d1,
                    hue: d1[0].hue,
                    saturation: d1[0].saturation,
                    lightness: d1[0].lightness + 50
                }; } %}

@{% function OSCURECER ([d1,,d2]) { 
                return {
                    d1: d1,
                    hue: d1[0].hue,
                    saturation: d1[0].saturation,
                    lightness: d1[0].lightness - 50
                }; } %}
main -> Luz
Luz -> CLARO | OSCURO | Hue
Hue -> ROJO | VERDE 

ROJO -> "rojo" {% ROJOFUN %}

VERDE -> "verde" {% VERDEFUN %}

CLARO -> Hue "claro" {% ACLARAR %}

OSCURO -> Hue "oscuro" {% OSCURECER %}
