/*
// EJEMPLO #01
let sumar = (numA, numB) => numA + numB
let restar = (numA, numB) => numA - numB
let multiplicar = (numA, numB) => numA * numB
let dividir = (numA, numB) => numA / numB

let calculadora = (numA, numB, operacion) => operacion(numA, numB)

console.log(calculadora(18,3,sumar));
console.log(calculadora(18,3,restar));
console.log(calculadora(18,3,multiplicar));
console.log(calculadora(18,3,dividir));



//EJEMPLO #02
let nombreCompleto = (nombre, apellido) => nombre + ' ' + apellido
let saludar = (nombre, apellido, callback) => 'Hola ' + callback(nombre, apellido) + '!'

console.log(saludar('Luis', 'Martirena', nombreCompleto));



//EJEMPLO #03
let doble = numA => numA * 2
let triple = numA => numA * 3
let aplicarCallback = (numA, callback) => callback(numA)

console.log(aplicarCallback(4, triple));
console.log(aplicarCallback(2, doble));



//EJEMPLO #04
let arrayEj = ["www.google.com","www.yahoo.com"]
let agregarHttp = url => 'http://' + url
let largoString = url => url.length
let procesar = (arrA, callback) => {
    let arrB = []
    for(let i = 0; i < arrA.length; i++){
        //let newElem = callback(arrA[i])
        arrB.push(callback(arrA[i]))
    }
    return arrB;
}

console.log(procesar(arrayEj,agregarHttp));
console.log(procesar(arrayEj,largoString));
*/
//EJEMPLO #04 con map
let arrayEj = ["www.google.com","www.yahoo.com"]
let agregarHttp = url => 'http://' + url
let largoString = url => url.length
let procesar = (arrA, callback) => arrA.map(function(elemento){
    return callback(elemento)
})
console.log(procesar(arrayEj,agregarHttp));