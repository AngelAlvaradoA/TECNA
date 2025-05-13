//filter()

const numbers = [2,3,4,5,6,7,8,9,10]
const envenNumbers = numbers.filter(number => number % 2 === 0)
console.log(numbers)
console.log(envenNumbers)

//reduce devuelte un unico valor sumando los valores cas1
const numbersReduce = [1,2,3,4,5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(numbersReduce)
console.log(sum)

// reduce() case 2
const words =['apple', 'Banana','Hello', 'bye',, 'Banana', 'bye', 'bye']

const wordFrecuency = words.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] ++
    }else{
        acc[current] = 1
    }
    return acc

}, {})

console.log(wordFrecuency)