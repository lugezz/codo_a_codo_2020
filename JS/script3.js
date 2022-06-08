function saludar(){
	console.log ("Hola enemigo, esta es mi primera función");
}

saludar();

function multiplicacion (numero, hasta) {
	for (var i = 1; i <= hasta ; i++) {
	console.log (numero + " x " + i + " = " + numero * i);
	}
}

multiplicacion (13, 11);

function multiplicar (numero1, numero2) {
	var result = numero1 *  numero2;
	return result
}

var resultado_es = multiplicar (2914, 127);

var algo = (a, b) => a * b * 1000;

console.log (algo(multiplicar(10, 30), 20));

var hablar = nombre => "Hola " + nombre;

console.log (hablar("Artime"));



