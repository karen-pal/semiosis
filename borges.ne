MAIN -> SENTENCE "."
SENTENCE -> SUB _ VERB _ MOD
SUB -> "la tarde" | "la mañana" | "la noche"
ADJ -> "vasta" | "tranquila" | "tenebrosa"
VERB -> "es" | "no sabe" | "algo me ha dicho" | "no copia" | "bajaba" | "me dijo"
MOD -> "bajo" _ OBJ | "Lejos de " _ OBJ | "no es más que" _ OBJ _ | "antes" | "pero" _ SENTENCE | OBJ
OBJ -> "lo que yo siento" | "alba" | "una fragancia" | "mi tumba"
_ -> " "
