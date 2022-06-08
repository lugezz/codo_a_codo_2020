
// Comentarios cortos de una sola línea. Suelen explicar la línea siguiente.
var a = 1;
var b = 45; // También se utilizan al final de una línea.
var suma =a +b;
var nombre= "Ana";
/* Por otro lado, existen los comentarios múltiples de varias líneas consecutivas.
Suelen utilizarse para explicaciones largas que requieren bastante
espacio porque se mencionan gran cantidad de cosas :-) 
*/
var y = 10;
var z = 3;


var resto = (y % z);
console.log(resto);
var texto = resto == 0 ? "Par": "Impar"
console.log ("El número es "+ texto);
//console.log("El número es " + resto=0? "Par": "Impar");

console.log("hola mundo");
console.log("La suma entre a y b es:" + (a+b) );

console.log("La suma entre a y b es:"+ a + b );

console.log("La suma entre a y b es:" + suma);


console.log("El nombre es:" + nombre); 
console.log("El nombre es: nombre"); 
console.log("El nombre es: " + "nombre"); 


alert ("Probar todos los ejemplos comentados ");


alert ("A practicar Javascript"); //Ejemplo de la funcion alert()

//Switch

var edad = 41;
var res = "";

switch (true) {
	case edad < 18:
	res = "Pendejo";
	break;

	case edad < 25:
	res = "En formación";
	break;

	case edad < 35:
	res = "Adulto";
	break;

	case edad < 50:
	res = "Aspirante a viejo";
	break;

	default:
	res = "Viejo";
}

console.log(res)

//For

for (var i = 1; i < 60; i+=3) {
	console.log (i);
}


// While 

n = 0;
x = 0;
while (n < 10) {
  n ++;
  x += n;
  console.log (x);
}



/*




// 
nombre=prompt("Ingrese su nombre:"); //  funcion prompt lee por pantalla un texto
console.log("Su nombre es:"+ nombre);



var x=prompt("ingrese un numero x:"); //prompt lee por pantalla un texto
var y=prompt("ingrese un numero y:"); //prompt lee por pantalla un texto
console.log("La suma entre x y y es:"+(x+y) );
console.log("La suma entre x y y es:"+(Number(x)+Number(y) ));
console.log("La suma entre x y y es:"+(parseFloat(x)+parseInt(y) ));



// ejemplos de las funciones parseInt y parseFloat
console.log(parseInt("F", 16));
console.log(parseInt("15"));
console.log(parseFloat("3.14")+5);
*/
/*
document.write("<h1>Bienvenido al curso FullStack Codo a Codo</h1>");
document.write("<p>Python</p>");
*/