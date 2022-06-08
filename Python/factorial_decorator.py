def factorial_decorator (func):

    if type(x) == int and  x >= 0:
        return func (x)
    else:
        raise TypeError('Error, no puede realizarse la operación')

def factorial(y):
    if y==0:
        return 1
    else:
        return y * factorial (y-1)

for n in range (1, 11):
    print ('El factorial de '+str(n) + ' es '+ str(factorial(n)))