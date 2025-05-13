// No modifican el array pero ayudan a encontrar elelmentos e indices
//Find busca por posiciones

const mutipliesOf5 = [5,10,15,20]
const firstNumberGreaterThan10 = mutipliesOf5.find(num => num > 10)

console.log(mutipliesOf5);
console.log(firstNumberGreaterThan10);

//findIdex toma el array y toma el indice del primer elemento del array que haga la istruccion dada
const randomNumber = [6, 14 , 27, 56, 49]
const indexNumber = randomNumber.findIndex( num => num > 50)
console.log(randomNumber);
console.log(indexNumber);