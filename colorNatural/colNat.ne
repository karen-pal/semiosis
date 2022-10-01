
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

@{% function AZULFUN (d) { 
                return {
                    d: d,
                    hue: 240,
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

@{% function SATURAR ([d1,,d2]) { 
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
                }; } %}

@{% function DESATURAR ([d1,,d2]) { 
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
                }; } %}


main -> Saturacion
Saturacion -> FUERTE | APAGADO | Luz
Luz -> CLARO | OSCURO | Hue
Hue -> ROJO | VERDE | AZUL

ROJO -> "rojo" {% ROJOFUN %}

VERDE -> "verde" {% VERDEFUN %}

AZUL -> "azul" {% AZULFUN %}

CLARO -> Hue _ "claro" {% ACLARAR %}

OSCURO -> Hue _ "oscuro" {% OSCURECER %}

FUERTE -> Luz _ "fuerte" {% SATURAR %}

APAGADO -> Luz _ "apagado" {% DESATURAR %}
