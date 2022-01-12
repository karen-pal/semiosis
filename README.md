

- Ambigüedad(cognición).
- Sensibilidad(sensorial). 
- Comunicación(lenguaje). 
- Propósito(almica)

##### Table of Contents  
[Comandos](#comandos)
[Headers](#headers)  
[Emphasis](#emphasis)  
...snip...    
<a name="comandos"/>
## Comandos
### Compilar la gramática
```nearleyc grammar.ne -o grammar.js```

### Generar producciones random
```nearley-unparse -s 3 grammar.js```

### Testear gramática
```nearley-test -i "#fff" csscolor.js```

### Usar CLI
```node color.js```

<a name="headers"/>
## Headers
