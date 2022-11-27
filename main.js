// programa que calcula las notas de alumnos

let espacio= " ";
let notaMaxima= -1;
let notaMinima= 11;
let suma= 0;
let cant= 0;
let dni= parseInt(prompt("ingrese DNI del alumno"))

function promediar(suma,cant){
    let promedio= suma/cant
    console.log("promedio realizado,"+espacio+promedio)
    return promedio
}

while (dni!=0) {
    let nota= parseFloat(prompt("ingrese nota del alumno"))
    cant= cant+1
    suma= suma+nota
    if (nota>notaMaxima) {
        notaMaxima= nota
        dniMax= dni
    }
    if (nota<notaMinima) {
        notaMinima= nota
        dniMin= dni
    }
    dni= parseInt(prompt("ingrese DNI de otro alumno, elija 0 para finalizar"))
}

promedio= promediar(suma,cant)

alert("El promedio fue de"+espacio+promedio)
alert("La nota máxima fue"+espacio+notaMaxima+", y la obtuvo el dni nro"+espacio+dniMax)
alert("La nota mínima fue"+espacio+notaMinima+", y la obtuvo el dni nro"+espacio+dniMin)

