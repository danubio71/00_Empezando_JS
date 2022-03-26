// ¡Hola Mundo desde Digital House!
/*
let saludo = "¡Hola Mundo desde Digital House!";
console.log( saludo );


if (5==='5') {
    console.log('Son iguales')
} else {
    console.log('Son diferentes')
}



let sumar = function (numA, numB) {
    return numA + numB
}

console.log(sumar(45, 76))



function sumar(numA, numB) {
    return numA + numB
}

console.log(sumar(45, 76))



let clima = 'Lluvia'
let dia = 'Lunes'
if (clima == 'Soleado' && dia == 'Domingo') {
    console.log('Lindo dia para pasear')
} else if (clima == 'Soleado' && dia == 'Lunes') {
    console.log('Podria salir igual')
} else {
    console.log('Mejor me quedo en casa practiando JS')
}



let diaDeSmana = 'Domingo'

if (diaDe) {
    
}



function pagoConTarjeta(seCobraIntereses, cuotasTarjetas, efectivoDisponible) {
    return !seCobraIntereses && cuotasTarjetas >= 3 || efectivoDisponible < 100
}

console.log(pagoConTarjeta(true, 6, 320))
console.log(pagoConTarjeta(true, 8, 80))
console.log(pagoConTarjeta(true, 2, 215))
console.log(pagoConTarjeta(true, 1, 32))

function pago(seCobraIntereses) {
    return !seCobraIntereses 
}

//console.log(pago(true))



function esNumeroDeLaSuerte(num){
    return (num > 0) && (num % 2 == 0 || num % 3 == 0) && (num != 15)
} 


console.log(esNumeroDeLaSuerte(4))



function estaEnEdad(edad, genero){
    return (edad >= 60 && genero == 'F') || (edad >= 65 && genero == 'M')
}


function tieneSuficientesAportes(aniosAporte){
    return aniosAporte >= 30
}

function puedeJubilarse(edad, genero, aniosAporte){
    return estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte)
}

console.log(puedeJubilarse(62, "F", 29))



function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    return (alturaPersona >= 1.5 || (alturaPersona >= 1.2 && vieneConCompania == true)) && (tieneAfeccionCardiaca == false)
}

console.log(puedeSubirse(1.5, false, false))



function medallaSegunPuesto(puesto){
    if (puesto == 1) {
        return "Oro"
    } else if (puesto == 2) {
        return "Plata"
    } else if (puesto == 3) {
        return "Bronce"
    } else {
        return "Seguí participando"
    }
}

console.log(medallaSegunPuesto(1))
console.log(medallaSegunPuesto(5))



let a = '5'
let b = 3
let c = a + b
console.log(c)



//ARRAYS
//Declará una función trasladar, que tome dos arrays, saque el último elemento del primero y lo agregue al segundo.
function trasladar(arr1, arr2){
    let elem = arr1.pop()
    arr2.push(elem)
}



function contiene(arr, num){
    return arr.indexOf(num) !== -1
}


//Sumar valores de un array

//Acumuladores
function sumatoria(arr){
    //suma es un acumulador, se declara antes del for y se les da un valor de 0
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma = suma + arr[i];
        console.log(i, arr[i], suma)
    }
    return suma
}

console.log(sumatoria([1,2,3,4]))



function sumatoriaPar(arr){
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            suma = suma + arr[i];
        }         
        console.log(i, arr[i], suma)
    }
    return suma
}

console.log(sumatoriaPar([1,2,3,4]))



//IndiceDe: nos indica todos los indices dentro de un array donde esta un elemento dentro de un array
function indiceDe(arr, elementoBuscado){
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elementoBuscado) {
            resultado.push(i);
        }
    }
    return resultado;
}


console.log(indiceDe([1,2,1,2,1,2],2))



function medallaSegunPuesto(puesto){
    let arr = ["", "Oro", "Plata", "Bronce"]
    if (puesto > 3) {
        return "Seguí participando"
    } else {
        return arr[puesto]
    }
}

console.log(medallaSegunPuesto(4))

//Definí una función llamada imprimir5veces5 que muestre por consola 5 veces el número 5. Una vez más, no estamos pidiendo que ejecutes la función.

function imprimir5veces5(){
    for (let i = 0; i < 5; i++) {
        console.log(5)
        
    }
}

console.log(imprimir5veces5())


//Escribí una función llamada pasandoPorI (la última letra es una i latina mayúscula) que muestre por consola "acá i tiene el valor de x" 
//donde x va a ser el valor de la variable i en cada iteración, por cada valor que va tomando i desde 0 hasta el numero 4 inclusive.

function pasandoPorI(){
    for (let i = 0; i < 5; i++) {
        console.log("acá i tiene el valor de " + i);
        
    }
}

console.log(pasandoPorI())


//Realizar una función llamada pasandoPorLosPares() que muestre por consola acá i tiene el valor de x por cada valor PAR que va tomando i desde 0 hasta 6 (inclusive). 
//Te recordamos que debes prestar especial atención con los espacios. En el ejercicio debe haber un solo espacio entre cada palabra.

function pasandoPorLosPares(){
    
    for (let i = 0; i < 7; i++) {
        if (i % 2 === 0) {
            console.log("acá i tiene el valor de " + i);
        }
    }
}

console.log(pasandoPorLosPares())


// 

function imprimirAzul(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log("Azul")        
    }
}

console.log(imprimirAzul(5))



function sumar5MonedasDe25Centavos(){
    let acum = 0;
    for (let i = 0; i < 5; i++){
        acum = acum + 0.25
    }
    return acum
}

console.log(sumar5MonedasDe25Centavos())



function sumarMonedasDe25(cantidadDeMonedas){
    let acum = 0;
    for (let i = 0; i < cantidadDeMonedas; i++){
        acum = acum + 0.25
    }
    return acum
}

console.log(sumarMonedasDe25(7))



function sumaDeLosParesDel0Al(x) {
    let acum = 0;
    for (let i = 0; i <= x; i++){
        if (i % 2 === 0) {
            acum = acum + i
        }
    }
    return acum
}

console.log(sumaDeLosParesDel0Al(10))



function sumatoriaHasta(x){
    let acum = 0;
    for (let i = 0; i < x; i++){
        acum = acum + i
    }
    return acum
}

console.log(sumatoriaHasta(5))



function caloriasDeTrote(cantVueltasACorrer){ //retorne la cantidad de calorias que consumiria
    let acum = 0;
    for (let i = 0; i <= cantVueltasACorrer; i++){
        acum = acum + (5 * i)
    }
    return acum
}

console.log(caloriasDeTrote(2))


//Escribí la función naipes que reciba el tipo de palo como parámetro y devuelva un array como resultado.
//naipes("espadas")
//["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]
//Tomá en cuenta que los naipes de la baraja española incluyen todas las numeradas del 1 al 12, pero para éste ejercicio no queremos incluir los 8 y los 9.

function naipes(palo){
    let palos = ["oros","espadas","copas","bastos"]
    let resultado = [];
    for(let j = 0; j < palos.length; j++){
        if(palo === palos[j]){
            for(let i = 1; i < 13; i++){
                if(i !== 8 && i !== 9){
                    resultado.push(i + " de " + palo)
                }
            }
        }
    }    
    return resultado
}

console.log(naipes("bastos"))



//Escribí una función factorial, la misma debe recibir un número y calcular el factorial del mismo.
//El factorial de un número n es el resultado de multiplicar todos los números enteros positivos menores o iguales que n.

function factorial(num){
    let acum = 1;
    let arr = [];
    for(let i = 1; i <= num; i++){
        arr.push(i)
    }
    for(let j = 0; j < arr.length; j++){
            acum = acum * arr[j] 
        }
    return acum
}

console.log(factorial(5))


//Necesitamos una función productoria que reciba un array de números y devuelva su productoria. La productoria es el resultado de multiplicar todos sus elementos entre ellos.
//Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.

function productoria(arr){
    let acum = 1;
    
    for(let j = 0; j < arr.length; j++){
        acum = acum * arr[j] 
    }
    return acum
}

console.log(productoria([1, 4, 7]))

function puedeJubilarse (edad=62,genero="F",aniosAportes=32){
    if (edad > 60 && genero=="F" && aniosAportes > 30){
        return true;}
    ;}

    */

//Los árboles utópicos crecen de una forma particular, en dos ciclos:
//Cada primavera duplican su tamaño
//Cada verano crecen un metro
//Si Laura planta un árbol utópico de un metro, al fin del otoño, ¿cuánto medirá de alto después de N ciclos?
/*
Algunos ejemplos:

Si N = 0, su altura será 1 metro (no creció nada)
Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
Si N = 2, su altura será de 3 metros (creció un metro más en verano)
Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
y así ...


function alturaArbolUtopico(ciclos){
    let acum = 0;
    for (let i = 0; i <= ciclos; i++){
        if(i % 2 !== 0){
            acum = acum * 2
        } else {
            acum = acum + 1
        }

    }
    return acum
}

console.log(alturaArbolUtopico(0))



Mas | Menos
Necesitamos una función masMenos que reciba un array y devuelva otro con los siguientes tres números:

En la primera posición, la fracción de números que son positivos
En la segunda posición, la fracción de números que son cero
En la última posición, la fracción de números que son negativos
Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que hay 50% de positivos, 25% de ceros, y 25% de negativos.


function masMenos(arr){
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    let totalArray = arr.length;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            positivos = positivos + 1
        } else if(arr[i] < 0) {
            negativos = negativos + 1
        } else {
            ceros = ceros + 1
        }
    }
    
    //console.log(positivos + " " + negativos + " " + ceros + " " + totalArray)
    let finalArray = [(positivos/totalArray),(ceros/totalArray),(negativos/totalArray)]
    return finalArray 
}

console.log(masMenos([1, 2, 0, -1]))

*******************************************************************************************************
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".



let p = 'quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
let vowels = ['a','e','i','o','u']



for (x in vowels){
    if (vowels[x] in p){
        console.log("i found one!")
    }
}





//En Julio ganó $50, en Agosto perdió $12, etc
var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

//En Enero la empresa ganó $80, en Febrero, $453, en Marzo $1000
var gananciasPrimerTrimestre = [80, 453, 1000];

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

console.log(gananciaTotal(gananciasUltimoSemestre))

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] > 0){
            cantidad = cantidad + 1;
        }
    }
    return cantidad;
}

console.log(cantidadDeMesesConGanancia(gananciasPrimerTrimestre))

function saldosDeMesesConGanancia(unPeriodo) {
    let mesesConGanancias = [];
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] > 0){
            mesesConGanancias.push(unPeriodo[i]);
        }
    }
    return mesesConGanancias;
}

console.log(saldosDeMesesConGanancia(gananciasUltimoSemestre))

function cantidadDeMesesConPerdida(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] < 0){
            cantidad = cantidad + 1;
        }
    }
    return cantidad;
}

//En Julio ganó $50, en Agosto perdió $12, etc
//var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

//En Enero la empresa ganó $80, en Febrero, $453, en Marzo $1000
//var gananciasPrimerTrimestre = [80, 453, 1000];

console.log(cantidadDeMesesConPerdida(gananciasUltimoSemestre))

//Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de la suma de los importes de todos los meses 
//que tienen ganancia, a excepción de los que superen un importe de $ 1.000

var ejemploArr = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];

function sumatoriaBajoImporte(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        if(mes > 1000 || mes < 0){
            mes = 0
        } else {
            sumatoria = sumatoria + mes;
        }
        
    }
    return sumatoria;
}

console.log(sumatoriaBajoImporte(ejemploArr))

  

Ej #2
Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un conjunto de asientos disponibles y el asiento que quiere ocupar la persona. 
Nuestra función deberá verificar si el asiento solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes:
Ejemplo si se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 15);  
// El resultado debería ser:
"Felicitaciones, el asiento número 15 está disponible"

Ejemplo si no se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 50);  
// El resultado debería ser:
"Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles"



function asientosDisponibles(arr, num){
    let numeroDeAsientos = arr.length;
    let cantidad = 0;
    for(let i = 0; i < arr.length; i++){
        
        if (num === arr[i]) {
            cantidad = cantidad + 1
        } else {
            cantidad = cantidad + 0
        }
    }
    if (cantidad > 0) {
        return "Felicitaciones, el asiento número " + num + " está disponible"
    } else {
        return "Lo sentimos, el asiento número " + num + " está ocupado, pero aún quedan " + numeroDeAsientos + " asientos disponibles"
    }
}


//console.log(asientosDisponibles([15, 28, 44, 45, 70], 15))
console.log(asientosDisponibles([3, 15, 18, 25], 18))

Ej#3
Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber cuantos pasajeros lleva luego de la parada en cada estación. 
Para ello nos contrataron a nosotros, quienes somos responsables de generar un programa que lo resuelva.

Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que avanzó el tren nos devuelva un reporte 
de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos provee los siguientes datos:

El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.
Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan los siguientes ejemplos:

 // Si ejecutara la función de ésta manera:
reporteDePasajeros(0);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren']
Otro ejemplo:

  // Si ejecutara la función de ésta manera:
reporteDePasajeros(3);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 
'En la estación 3 hay 260 pasajeros arriba del tren']

Otro ejemplo:

  // Si ejecutara la función de ésta manera:
reporteDePasajeros(5);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 
'En la estación 3 hay 260 pasajeros arriba del tren', 'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320 pasajeros arriba del tren']



//reciba la cantidad de estaciones que avanzó el tren
//nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren
function reporteDePasajeros(estaciones){
    let pasajeros = 200;
    let finalArray = [];
    for (let i = 0; i <= estaciones; i++) {
        if (i === 0) {
            pasajeros = pasajeros
        } else if(i === 5){
            pasajeros = pasajeros + 40
        } else {
            pasajeros = pasajeros + 20
        }
        finalArray.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren")
        //console.log()
    }
    return finalArray;
}

console.log(reporteDePasajeros(3))



let curso = {
    cantidadDeAlumnos: 32,
    docentes: ['Nacho', 'Javier'],
    horario: 'de 19 a 21 hrs',
    notificaciones: function(){
        return "El horario del curso es de " + this.horario
    }
}

console.log(curso.notificaciones());



//Funcion CONSTRUCTORA -- Una funcion que va a construir un objeto
function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramacion = new Curso(32, ["Javier", "Gerardo"], "de 19 a 21 hrs");

console.log(cursoDeProgramacion);


let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        return (this.energia = this.energia - (horas * 5)) && (this.experiencia = this.experiencia + (horas * 2));
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);



let tengoQueTrabajar = dia => {
    if (dia === "Sabado" || dia === "Domingo") {
        return "No tenes que trabajar"
    } else {
        return "Si Luis, tenes que ir a trabajar"
    }
}

console.log(tengoQueTrabajar("Lunes"));



// IF TERNARIO
let fruta = 'Durazno';

let resultado = fruta === "Durazno" ? "Que rico, un Durazno!" : "No quiero, no es un Durazno"

console.log(resultado);

// SWITCH

let semaforo = "Verde"

switch(semaforo){
    case 'Verde':
        console.log('Puedo Cruzar');
        break;
    case 'Amarillo':
        console.log('Precaucion');
        break;
    case 'Rojo':
        console.log('No cruces');
        break;
    default:
        console.log('No funciona el semaforo');
        break;
}

//En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. 
//Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 
//hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let acum = 0;
    for(let i = 0; i <= numero; i++){
        if(i % 2 !== 0){
            acum = acum + 1
            
        }
        
    }
    return acum;
    
}

console.log(noParesDeContarImparesHasta(10));



const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[1]

console.log(fruits);



//datos primitivos(son primitivos porque no son objetos): big int, number, boolean, symbol, undefined, string
// Cuando copias un dato primitivo, se copia por valor. 
// Cuando copias datos no primitivos es una copia en la direccion de memoria
let a = [1,2,3]
let b = a // igual a la posicion de memoria donde a tiene el puntero
a[0] = 3
console.log(b);

//
let c = 100
let d = c // crea un valor nuevo en memoria para d, diferente al de c
c = 90
console.log(d);

const j = [{
    nombre: 'Luis'
},2,3]
const k = [...j]
j[0].nombre = 'Sebas'
console.log(j);



console.log(Boolean('0'));
*/