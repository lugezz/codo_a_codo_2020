import math
from funciones1 import f
from Utils.contador_de_llamadas_def import contador_de_llamadas
from objetos import Persona

@contador_de_llamadas
def factorial3 (x):
    def factorial_interno(y):
        if y==0:
            return 1
        else:
            return y * factorial_interno (y-1)

    if type(x) == int and  x >= 0:
        return factorial_interno (x)
    else:
        raise TypeError('Error, no puede realizarse la operación')

def main():
    print ('Este es el entry point de mi programa')

    funcion_1 = f(1)
    funcion_2 = f(2)

    print(funcion_1(1))
    print(funcion_2(1))

    print(factorial3.calls)
    for n in range (1, 11):
        print ('El factorial de '+str(n) + ' es '+ str(factorial3(n)) )

    print(factorial3.calls)

    una_persona = Persona(name='Artime') #, surname='Vazquez'
    otra_persona = Persona(name='Frank', surname='Passennheim') 

    print(una_persona)
    print(otra_persona)
    print(Persona.funcname)
    print(Persona.func2name)

main()


