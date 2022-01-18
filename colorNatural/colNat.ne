
@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace
main -> Saturacion
Saturacion -> Luz _ "fuerte" | Luz _ "apagado" | Luz 
Luz -> Hue _ "claro" | Hue _ "oscuro" | Hue
Hue -> "rojo" | "azul" | "verde"
