hey();

function hey()
{
  console.log("Hola " + miNombre);
}

var miNombre = "Diego";

var a = 20;
var b = 4 * 7;
console.log(typeof b)

var c = a + "";
console.log(typeof c);

var d = "20";
c = Number(d);
console.log(typeof c + " " + c)

console.log(2 + 3)
console.log(20 / 2.0)

console.log(3/2)
console.log(!false)

console.log(3 == "3") // Compara valores y no tipos de datos
console.log(3 === "3") // Compara estrictamente

console.log(3 === "3")
var edad = 40
edad++;
console.log(edad)

a = 0
if(a)
{
  console.log("a " + a)
}else{
  console.log("falseee")
}