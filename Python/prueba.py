
print("Hello World")

mi_variable = "Esto es una variable"
print(mi_variable)
mi_variable = "Esto es una variable cambiada"

print(mi_variable)

# Esto es un comentario

uno = 10
dos = 2220

tres = uno + dos
print(tres)

print ("La variable tres es igual a " + str(tres) + " y dividido 123 da " + str (round(tres / 123, 2)))

print(len(mi_variable))

interruptor = False
print(not interruptor)

texto_ingresado = input ("Ingrese cualquier boludez: ")

print(texto_ingresado)

def contarHasta(hasta):
    """
    Documentación
    """
    for x in range(1,hasta+1):
        print (x)

contarHasta(10)
