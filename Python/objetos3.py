from datetime import date

class persona():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def fromBirthYear(cls, name, year):
        return cls (name, date.today().year-year)

    @staticmethod
    def esAdulto (age):
        return age > 18
    
