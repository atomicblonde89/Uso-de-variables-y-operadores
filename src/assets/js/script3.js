//Ejercicio n°4

function days() {
    let input1 = parseInt(document.getElementById("input1").value);
    let convert_years = Math.floor(input1/365);
    let convert_weeks = Math.floor((input1 - convert_years * 365) / 7).toFixed(2);
    let convert_days = Math.floor (input1 % 365) % 7;

    document.getElementById("days_results").innerHTML = `El resultado de la conversión de ${input1} días es: ${convert_years} año, ${convert_weeks} semanas, ${convert_days} días. <br>`;
}
