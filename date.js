let fechaActual = new Date();

console.log(fechaActual);
console.log(fechaActual.toUTCString());
console.log(fechaActual.getFullYear());
console.log(fechaActual.getMonth());
console.log(fechaActual.getDay());
console.log(fechaActual.getDate());

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Setiembre", "Octubre", "Noviembre", "Diciembre"]

let diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

let anio = fechaActual.getFullYear();
let nombreDia = diasSemana[fechaActual.getDay()];
let mes = meses[fechaActual.getMonth()];
let dia = fechaActual.getDate();

console.log(`Hoy es ${nombreDia} ${dia} de ${mes} del ${anio}`);

let fechaDeterminada = new Date(1971, 10, 30)
let anioDet = fechaDeterminada.getFullYear();
let mesDet = meses[fechaDeterminada.getMonth()];
let diaDet = fechaDeterminada.getDate();

console.log(`Yo naci el ${diaDet} de ${mesDet} del ${anioDet}`);


