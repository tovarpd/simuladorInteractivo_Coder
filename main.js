
function volverNota1() {
    do {
        nota1 = parseFloat(prompt("Lo volvemos a intentar? Ingresa de nuevo tu nota"))
    } while ((nota1 >= 10))
    }

function volverNota2() {
    do {
        nota2 = parseFloat(prompt("Lo volvemos a intentar? Ingresa de nuevo tu nota"))
    } while (nota2 >= 10);
}

function volverNota3() {
    do {
        nota3 = parseFloat(prompt("Lo volvemos a intentar? Ingresa de nuevo tu nota"))
    } while (nota3 >= 10);
}

function promedio (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

alert("Bienvenidx a tu promediador de notas. Con ingresar tres notas conocerás tu promedio. (Nota máxima: 10)")

let nota1 = parseFloat(prompt("Ingresa tu primera nota"))
if (nota1 <= 10) {
    alert("Primera nota recibida")
} else {
    alert("Primera nota no valida")
    volverNota1()
}
let nota2 = parseFloat(prompt("Ingresa tu segunda nota"))
if (nota2 <= 10) {
    alert("Segunda nota recibida")
} else {
    alert("Segunda nota no valida")
    volverNota2()
}
let nota3 = parseFloat(prompt("Ingresa tu tercera nota"))
if (nota3 <= 10) {
    alert("Tercera nota recibida")
} else {
    alert("Tercera nota no valida")
    volverNota3()
}

let promediar = prompt(`Tus notas son ${nota1}, ${nota2} y ${nota3}. Quieres conocer tu promedio?`)
if ((promediar === "si" || promediar === "")) {
    let resultado = promedio(nota1, nota2, nota3);
    alert(`tu promedio es ${resultado}`);
    alert("No te emociones que igual no pasas el año")
} else {
    alert("Ups, algo ha pasado")
}