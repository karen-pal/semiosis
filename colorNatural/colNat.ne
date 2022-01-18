
@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace

@{% function LENGTH (d) { return d[0][0].length; } %}
main -> Hue {% LENGTH %}
Saturacion -> Luz _ "fuerte" | Luz _ "apagado" | Luz 
Luz -> Hue _ "claro" | Hue _ "oscuro" | Hue {%

    function([a, b , data]) {
        return(a)
        }
%}
Hue -> "rojo" | "azul" | "verde"
