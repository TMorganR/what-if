const prompt= require('prompt-sync')({sigint: true})

let num1 = Number(prompt("Pick a number let's hope it works: "))
if (num1%3 == 0){
    console.log("Fizz")
} if (num1%5 == 0){
    console.log("Buzz")
} if (num1%16== 0){
    console.log("Fizzbuzz")
}