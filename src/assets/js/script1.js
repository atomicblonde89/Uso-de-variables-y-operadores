//Ejercicio n°2

alert("Ingresa dos números diferentes y mayores de cero"); //Pop-up de instrucciones
const input1 = prompt("Ingresa el primer número"); // Variable input1 para ingreso de primer número
const input2 = prompt("Ingresa el segundo número"); // Variable input1 para ingreso del segundo número

let sum = parseInt(input1) + parseInt(input2); // Almacenamiento en nueva variable, llamada sum, más parseo de argumento string a int
let subtraction = parseInt(input1) - parseInt(input2); // Almacenamiento en nueva variable, llamada substraction, más parseo de argumento string a int
let multiplication = parseInt(input1) * parseInt(input2); // Almacenamiento en nueva variable, llamada multiplication, más parseo de argumento string a int
let division = (parseInt(input1) / parseInt(input2)).toFixed(1); // Almacenamiento en nueva variable, llamada division, más parseo de argumento string a int, inclueyndo un formateo de notación o redondeo
let module = parseInt(input1) % parseInt(input2); // Almacenamiento en nueva variable, llamada module, más parseo de argumento string a int


if (parseInt(input1) === 0 || parseInt(input2) === 0 || input1 === input2) { //Condicional para entradas > 0 y para no ser ===, 
  alert(
    "Ambos números deben ser mayores a cero y no pueden ser iguales"
  );
} else { //Condicional de salida, para escritura en formato html.
  document.write(`La suma entre ${input1} y ${input2} es: ${sum}<br>`);
  document.write(`La resta entre ${input1} y ${input2} es: ${subtraction}<br>`);
  document.write(`La multiplicación entre ${input1} y ${input2} es: ${multiplication}<br>`);
  document.write(`La división entre ${input1} y ${input2} es: ${division}<br>`);
  document.write(`El módulo entre ${input1} y ${input2} es: ${module}<br>`);
}

