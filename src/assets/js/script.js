//Ejercicio n°2

alert("¡Hola! Ingresa dos números diferentes y mayores de cero");
const num1 = prompt("Ingresa el primer número");
const num2 = prompt("Ingresa el segundo número");

let sum = parseInt(num1) + parseInt(num2);
let subtraction = parseInt(num1) - parseInt(num2);
let multiplication = parseInt(num1) * parseInt(num2);
let division = (parseInt(num1) / parseInt(num2)).toFixed(1);
let module = parseInt(num1) % parseInt(num2);

// Document write

if (parseInt(num1) === 0 || parseInt(num2) === 0 || num1 === num2) {
  alert(
    "Ambos números deben ser mayores a cero y no pueden ser iguales"
  );
} else {
  document.write(`La suma entre ${num1} y ${num2} es: ${sum}<br>`);
  document.write(`La resta entre ${num1} y ${num2} es: ${subtraction}<br>`);
  document.write(
    `La multiplicación entre ${num1} y ${num2} es: ${multiplication}<br>`
  );
  document.write(`La división entre ${num1} y ${num2} es: ${division}<br>`);
  document.write(`El módulo entre ${num1} y ${num2} es: ${module}<br>`);
}

//Ejercicio n°3

function convert (){
  let celsius = document.getElementById("celsius").value;
  let fahrenheit = (parseInt(celsius)*(9/5)+32).toFixed(2);
  let kelvin = (parseInt(celsius)+273.15).toFixed(2);
  
}