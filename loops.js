var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante)
{
    console.log(`Hola, ${estudiante}`)
}

for(var i = 0; i < estudiantes.length; i++)
{
    //console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}

// for of
for(var estudiante of estudiantes)
{
    saludarEstudiantes(estudiante);
}

// while
var est;
while(estudiantes.length)
{
    est = estudiantes.pop();
    console.log(est);
}