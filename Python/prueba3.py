import math

def factorial (numero):
    resp = 1
    a = numero

    while a > 0:
        resp = resp * a   
        a-=1
    
    return resp

def factorial2 (x):
    if type(x)== int and  x >= 0:
        if x==0:
            return 1
        else:
            return (factorial2(x-1))
    else:
        raise TypeError('Error, no puede realizarse la operación')

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

for n in range (2, 11, 2):
    print ('El factorial de '+str(n) + ' es '+ str(factorial3(n)) )


aa = 11
var1 = factorial(aa)
print (var1)

var2 = factorial(aa)
print (var2)

#print(factorial2(-1))

def g():
    print ('Esta es la función g')

def f(func):
    print ('Estoy en la función f')
    func()

    print('Llamo a la función ' + func.__name__)

f(g)
