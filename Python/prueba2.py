#Importo una librería para usar el método write y escribri en la misma línea
import sys
import os

sys.stdout.write(' primera línea')
sys.stdout.write(' segunda línea')

#salto de línea
print('')

print ('1')
print ('2')
print ('3')
#print ('4')
#print ('5')
print ('6')
print ('7')
print ('8')

print (2+2)

#concateno con el operador de + o con la coma

print('2', 2)

#esto es un comentario

""" 
esto es un 
comentario de
bloque
"""

n1 = 10
print ("El valor de n1 es:", n1)
print ("El valor de n1 es: " + str(n1))

n2 = 5
print("La suma de n1 y n2 es: ", n1+n2)

#variable entera

edad=21
print(edad)
print ('La edad es: ', edad)

#Variable flotante
altura=1.75
print(altura)
print ('La altura es: ', altura)
altura = altura + 0.05
print ('La altura es: ', altura)

#Variable compleja
# Número complejo
#parte real 5 y parte imaginaria 3

valor = 5 + 3j
print ('El valor es', valor)

#Cadena de caracteres, puede ser comilla doble o simple
Nombre1 = "Jorge"
Nombre2 = 'Ana'

print("Los alumnos son "+ Nombre1 + " y "+ Nombre2)

#Booleano
encontrado = False
print(encontrado)
encontrado= not encontrado
print(encontrado)
encontrado= not encontrado
print(encontrado)

#Ingreso por consola de números
valor = input('Ingrese cantidad: ')
print('Usted ingresó:', valor)

#Ingreso por consola de texto
nombre = input('Ingresa tu nombre: ')
print('Hola querido', nombre," me dijeron que tenés",edad," años")

#listas
thislist = ["apple", "banana", "cherry", "apple", "cherry"]
print(thislist)
print(type(thislist))

print(thislist[2])
print('Este es el listado:')

for elemento in thislist:
    print (elemento)

#tupla
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)
print(type(thistuple))

for elemento in thistuple:
    print (elemento)


#Diccionario
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(type(thisdict))

print(thisdict["brand"])
print("Va el listado:")

for elemento in thisdict:
    print (elemento + ": " + str(thisdict[elemento]))


print(os.getcwd())





