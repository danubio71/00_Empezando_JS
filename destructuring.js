// Destructuracion de Arrays
let cursos = ["Programacion", "MKT", "UX", "Data Science", "UX"]

let [programacion] = cursos;
let [,mkt] = cursos;

console.log(programacion);
console.log(mkt);


// Destructuracion de Objetos

let persona = {
    nombre: "Luis",
    edad: 50,
    domicilio: "Calle 123"
}

let {edad} = persona;

console.log(edad);