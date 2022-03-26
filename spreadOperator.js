let peliculasAccion = ["End Game", "Iron Man 3", "Capitan America"];
let peliculasComedia = ["Mi pobre Angelito", "Que paso ayer"];

let peliculas = [...peliculasAccion, ...peliculasComedia]

//console.log(peliculas);

//Spread Operator Objetos
let generoComedias = {
    nombreGenero: "Comedia",
    popularidad: 3
}

let miPobreAngelito = {
    nombre: "Mi pobre Angelito",
    duracion: 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre: "Que paso ayer",
    duracion: 145,
    ...generoComedias
}

//console.log(miPobreAngelito);

//Spread Operator Funciones
function peliculasVistas(...nombresDePeliculas){
    nombresDePeliculas.forEach(function(peliculas){
        console.log(`La persona ya vio: ${peliculas}`);
    })
}

peliculasVistas("Que paso ayer","End Game", "Iron Man 3", "Capitan America");