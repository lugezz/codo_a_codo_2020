class Persona():
    nombre = None
    apellido = None

    def __init__(self, name="Cachulo", surname="Something"):
        self.nombre = name
        self.apellido = surname

    def __str__(self):
        return str (self.apellido)+", "+ str(self.nombre)


    def comoTeLlamas(self, agregado=''):
        print ('Me llamo '+ self.nombre + " " + agregado)

    @classmethod
    def funcname (cls, parameter_list):
        """
        doc string
        """
        pass

    @staticmethod
    def func2name(x, y):
        """
        doc string
        """

        print (x)        
