// Map uno de los metodos mas aplicados en arrays 
const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squareNumbers)

//foreach iterar sobre cada uno de los elementos, no crea un nuevo array
 const colors = ['red', 'pink', 'blue']
 const iteratedColores = colors.forEach(color => console.log(color))
 
console.log(colors)
console.log(iteratedColores)

//Exercise: Fahrenheit to celcius coversion
const temperaturesFahrenheit = [32, 68, 35, 212]
const  temperaturesCelcius = temperaturesFahrenheit.map(Fahrenheit => (5/9) * (Fahrenheit - 32))
console.log('Temperatures in fahrenheit: ',temperaturesFahrenheit)
console.log('Temperatures in celcius: ',temperaturesCelcius)

//exercise: Sum of elements in an array
const newNumbers = [1,2,3,4,5]
let sum = 0
newNumbers.forEach(number =>{
    sum += number
})
console.log('Array of Numbers: ', newNumbers)
console.log('Sum of Numbers: ', sum)