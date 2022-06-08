var persona = {
	nombre: "Juan",
	apellido: "Paz",
	dni: 11223344,
	nombreCompleto: function (texto="") {
		return this.nombre + " " + this.apellido + " " + texto;
	}
};

console.log (persona.dni);
console.log (persona.nombreCompleto("Impresentable"));
console.log (persona["dni"]);

var otraPersona = Object.create (persona);
otraPersona.nombre = "Jorge";

for (const i in otraPersona) {
	if (otraPersona.hasOwnProperty(i)){
		const element = otraPersona [i];
		console.log (element);
	}
}

let cad ="Hello World";

for (let letra of cad){
	console.log(letra);
}

let nombres = ["Kevin", "Negro", "Walter", "Rava"];

for (let item in nombres){
	console.log(nombres[item]);
}

for (let item of nombres){
	console.log(item);
}