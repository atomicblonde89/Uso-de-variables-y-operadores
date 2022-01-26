//Ejercicio n°3

function convert (){ //Función "convert" 
    let celsius = document.getElementById("celsius").value; // Variable de entrada recibir desde la propiedad "element by id" con identificación "celsius"
    let fahrenheit = (parseInt(celsius)*(9/5)+32).toFixed(2); // Variable almacenamiento de conversión, desde celsius a fahrenheit
    let kelvin = (parseInt(celsius)+273.15).toFixed(2); // Variable almacenamiento de conversión, desde celsius a kelvin
    

    //Salida
  document.getElementById("kelvin_convert").innerText =`La conversión de: ${celsius}°C a K° es: ${kelvin}°K`; // Propiedad de salida, para escritura en formato html, mostrando conversión Celius a Kelvin
  document.getElementById("fahrenheit_convert").innerText =`La conversión de: ${celsius}°C a F° es: ${fahrenheit}°F`; // Propiedad de salida, para escritura en formato html, mostrando conversión Celius a Fahrenheint
} 