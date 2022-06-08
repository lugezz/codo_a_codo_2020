def contador_de_llamadas(func):
    def helper(x):
        helper.calls +=1
        return func(x)
    helper.calls = 0
    return helper

#@contador_de_llamadas # Equivale a factorial3 = contador_de_llamadas(factorial3)

