class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`);
    }
}


const person1 = new Person('Angel', 20);

person1.greet();