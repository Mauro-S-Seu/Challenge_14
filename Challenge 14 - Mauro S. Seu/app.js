
// *** EJERCICIO N° 1 ***
// A través de 'document.write' concatena un saludo almacenado en 2 variables.

let saludo = 'Hola ';
let nombre = 'Mundo';

document.write( `<h1>${saludo} ${nombre} <br></h1>`);
//document.write( saludo + nombre);


// *** EJERCICIO N° 2 ***
// Pedirle el nombre al usuario y devolver un msje con saludo en el HTML.

document.write("<br>");
document.write("<br>");
let user = prompt("Ingresar su nombre completo: ");

document.write(`Hola Sr. ${user}`);
document.write("<br>");

// *** EJERCICIO N° 3 ***
// Introducir un número y devolver el doble del mismo número.

document.write("<br>");
let num = parseInt(prompt("Ingrese un número: "));

document.write(`El doble de su número es ${num * 2} <br>`);


// *** EJERCICIO N° 4 ***
// Recibir el apellido del usuario y mostrar por consola la última letra.

document.write("<br>");
let apellido = prompt("Ingrese su Apellido: ");
let ultimaLetra = apellido.slice(-1)

document.write(`La útima letra de su Apellido es: ${ultimaLetra}`);

// let apellido2 = prompt("Ingrese su Apellido:");
// console.log(apellido2.trim().slice(-1));


