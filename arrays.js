var frutas = ["Manzana" ,"Plátano", "Cereza", "Fresa"]

console.log(frutas);

console.log(frutas.length);

// Acceder al array
console.log(frutas[0]);

// Acceder al array
console.log(frutas[2]);

// Agregar elementos
var masFrutas = frutas.push("Uvas")

// masFrutas devuelve 5
// y el arreglo frutas guarda: ['Manzana', 'Plátano', 'Cereza', 'Fresa', 'Uvas']

// Devuelve el último de la lista y lo elimina
var ultimo = frutas.pop()
// ultimo tiene "uvas" que era el último


// unshift
var nuevaLongitud = frutas.unshift("Sandía") 
// ['Sandía', 'Manzana', 'Plátano', 'Cereza', 'Fresa']

// Shift: elimina el primero y lo devuelve (como pop pero al primero)
var borrarFruta = frutas.shift();

// index
var posicion = frutas.indexOf("Plátano")

