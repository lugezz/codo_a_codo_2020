class persona():
    nombre = None
    apellido = None

    def __init__(self, name="Cachulo", surname="Something"):
        self.nombre = name
        self.apellido = surname

    def __str__(self):
        return str (self.apellido)+", "+ str(self.nombre)

    def comoTeLlamas(self, agregado=''):
        print ('Me llamo '+ self.nombre + " " + agregado)

variable_persona = persona()

print (variable_persona)
print (variable_persona.apellido, variable_persona.nombre)
print (variable_persona.comoTeLlamas(', qué tul?'))

variable_persona.apellido = 'Roque'

print (variable_persona.apellido, variable_persona.nombre)

variable_persona.nombre = 'Raquel'

print (variable_persona.apellido, variable_persona.nombre)