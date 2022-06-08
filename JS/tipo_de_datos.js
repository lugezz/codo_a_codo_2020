//// Arrays

const array = ["a", "b", "c"];
const vacio = [];
const mixto = ["a", 3, true];

console.log(mixto);
console.log(mixto[1]);

mixto [3] = 11;
console.log (mixto [3]);

mixto [2] = 11;

console.log(mixto);

mixto.push("caraecui");

console.log(mixto);

mixto.push ("Agr1", "Agr2", "Agr3");
console.log(mixto);
console.log("Agr3 está ubicado en la posición " + (mixto.indexOf("Agr3")+1));

var quitado = mixto.pop();
var quitado2 = mixto.shift();

mixto.unshift (quitado);
mixto.push (quitado2);

console.log(mixto);

console.log("Agr3 está ubicado en la posición " + (mixto.indexOf("Agr3")+1));

var new_array = mixto.concat(array);

console.log (new_array);
console.log (vacio.length);

for (var i = 0; i <	 mixto.length; i++) {
	console.log ("El elemento " + i + " es " + mixto[i]);
}

var a = new Number(prompt("Ingrese el número a: ", 4));
var b = new Number(prompt("Ingrese el número b: ", 44));

console.log (`La suma entre ${a} y ${b} es ${a+b}`);

