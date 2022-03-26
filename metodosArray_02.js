
//PARTE 2 DE METODOS DE ARRAY
let notas = [10,4,5,8,9,2,7]
// .map() - aplicar una funcion a cada elemento del array - retorna un array nuevo
// En este caso queremos multiplicar cada numero por 10
let notasHastaEl100 = notas.map(function(numero){
    return numero * 10
});

//console.log(notasHastaEl100);

/*
Nos dejaron una lista con los horarios de partida de algunos aviones. 
Esta lista se reproduce directamente en las pantallas del aeropuerto y, 
a modo de travesura, queremos adelantar una hora cada partida. 
Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista en una variable nueva 
llamada horariosAtrasados.

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(numero){
    return numero - 1
})

console.log(horariosAtrasados);
*/


/* 
// .filter() - filtrar un array con una condicion - retorna un array nuevo
// En este caso quiero filtrar las notas aprobadas, mayores o iguales a 7
*/
let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
});

console.log("Las notas aprobadas son: " + notasAprobadas)
console.log(notasAprobadas);

/*
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados 
para acordar un recuperatorio. 
Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. 
Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado === true
});

let desaprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado === false
});

console.log(aprobados);
console.log(desaprobados);

*/


// .reduce() - para usar un acumulador en los for - recibe dos parametros: el acumulador y cada valor del array original
// El acumulador automaticamente empieza en 0 si no le digo lo contrario
// Queremos una suma de todas las notas
let sumaNotas = notas.reduce(function(acum, numero){
    return acum + numero;
})

//console.log("La suma total de las notas es: " + sumaNotas);

/*
Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.

let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce(function(acum, valor){
    return acum + valor
});

console.log(totalVueltas);
*/

// .foreach - recorrer cada elemento y su indice - no devuelve nada
// Recibe como parametro la funcion que recibe dos parametros: el VALOR de cada uno de los elementos 
// del array y el INDICE de los mismos.
/*
notas.forEach(function(valor, indice){
    console.log(`El valor ${valor} esta en el indice ${indice}`);
})
*/

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado === true
});

let desaprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado === false
});

console.log(aprobados);
console.log(desaprobados);