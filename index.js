console.log("Promedio anual de alumnos de secundaria");

let nombreAlumno = prompt("Ingrese nombre del alumno");
let evaluacion1 = parseInt (prompt(" Ingrese primer nota "));
let evaluacion2 = parseInt (prompt(" Ingrese segunda nota "));
let evaluacion3 = parseInt (prompt(" Ingrese tercer nota "));

let promedio = calcularPromedio();

function calcularPromedio() {
    return (evaluacion1+evaluacion2+evaluacion3) / 3;
}

console.log (
    "Estimado " + nombreAlumno + " su promedio anual es de  " + calcularPromedio()
);