class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    emitSound(){
        console.log('El animal emite un sonido');
    }
}

class Dog extends Animal{
    constructor(name,type, breed){
      super(name, type);   
      this.breed = breed;   
    }

    emitSound(){
        console.log('El perro ladra');
    }

    run(){
        console.log(`${this.name} corre alegremente`);
    }
}


const dog1 = new Dog('Bobby', 'Perro', 'Pug');

console.log(dog1);
dog1.run();
dog1.emitSound();

dog1.newMethod = function () {
    console.log('Este es un metodo');
}

Dog.prototype.secondMethod = function () {
    console.log('Este es un segundo metodo nuevo');
}


console.log(dog1.secondMethod());