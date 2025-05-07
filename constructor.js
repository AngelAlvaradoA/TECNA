// const persona = {
//     name: 'Angel',
//     lastName: 'Alvarado',
// }

//Para asegurar para construir la cantidad de objetos que queramos.
//Funcion Constructora

function Persona(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

const persona1 = new Persona('Angel','Alvarado', 20);
console.log(persona1);

const persona2 = new Persona('Diego','Aragon',22);
console.log(persona2);

Persona.prototype.tel = '555-5555-5555';

persona1.nacionalidad = 'Mexicano';

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.name} ${this.lastName}`)
}

persona1.saludar();
persona2.saludar();