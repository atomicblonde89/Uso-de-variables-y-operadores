//Ejericico n°5

alert("Ingrese 5 números")
let input1= parseFloat(prompt("Primer número: "));
let input2= parseFloat(prompt("Segundo número: "));
let input3= parseFloat(prompt("Tercero número: "));
let input4= parseFloat(prompt("Cuarto número: "));
let input5= parseFloat(prompt("Quinto número: "));

let sum = parseFloat(input1)+parseFloat(input2)+parseFloat(input3)+parseFloat(input4)+parseFloat(input5);

alert( "La suma de todos los números es: " + sum);

let prom = sum / 5;

alert("El promedio de los 5 números ingresados es : " + prom);
