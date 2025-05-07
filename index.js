/* 
    estructura de datos

key / value \
objeto
propiedad = valor

metodos: funciones que estan dentro de los objetos
*/

const persona = {
    nombre: 'John',
    edad: 30,
    direccion: {
        calle: 'Av Insurgentes 187',
        cuidad: 'cuidad de Mexico'
    },
    saludar(){
        console.log(`hola mi nombre es ${persona.nombre}`)
    }
};

console.log(persona);
persona.saludar();


persona.telefono = '555-555-5555';
console.log(persona.telefono);

persona.despedir = () => {
    console.log('Adios');
}

persona.despedir();

console.log(persona);

//Borrar propiedades y metodos

delete persona.telefono;
console.log(persona);

delete persona.despedir;
console.log(persona);