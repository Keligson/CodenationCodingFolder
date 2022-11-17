let favHolidayDestinations = [
    "0 Venice, Italy",
    "1 Paris, France",
    "2 Barcelona, Spain",
    "3 Manchester, UK",
    "4 London, England",
    "5 Mars, Solar system"
]

// NOT DRY CODE
// console.log(favHolidayDestinations[0])
// console.log(favHolidayDestinations[1])
// console.log(favHolidayDestinations[2])

// FOR LOOP VERSION
// for (let i = 0; i < favHolidayDestinations.length; i++){
//     console.log(favHolidayDestinations[i])
// }

// for (initialExpression; condition; increment/decrement/Expression) {
    // do stuff
// }
// "let i = 0;” means start from array position 0
// “i < favHolidayDestinations.length; i++)” Start at position 0 (because I specified that i is position 0), then +1 position until the end of the array

// "let i = 0;" can be changed to start from a different position
// for (let i = 3; i < favHolidayDestinations.length; i++){
//     console.log(favHolidayDestinations[i])
// }

// for (let i = 0; i <=10; i++){
//     console.log(i += 2)
// }
// We start a 0
// It adds 2 because of (i += 2) (from 0 to 2)
// It then runs the first increment (from 2 to 3)
// Then runs the console.log which adds 2 (from 3 to 5)




// an empty array
// let evenNumbers = []

// n = position, 0
// as long as n is less than 20, carry on
// increment in 1s


// for (let n = 0; n < 20; n++){
//     if (n % 2 == 0) {
//         (evenNumbers.push(n))
//     }
// }

// if array item is divisible by 2 and have nothing remaining, it will exceute the next statement
// the next statement will return to n the array item number

// console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)

// WHILE LOOPS

// let lives = 3

// while (lives > 0 ){
//     console.log("Well done! You're still in the game.")
//     lives--
// }

// console.log("Game over!!!")

// while(condition){
    // do stuff
// }

// DICE ROLL EXAMPLE
// let currentDiceRoll = "3"

// while(currentDiceRoll != 1){
//     console.log(currentDiceRoll)
//     currentDiceRoll = Math.floor(Math.random()*6)+1
// }

// console.log(currentDiceRoll)


// console.log(Math.random())
// will generate a random number between 0 and 1

// console.log(Math.floor(Math.random()*6)+1)
// will generate a random number between 0 and 1



//  DICE ROLL 3 TIMES TEST
// let currentDiceRoll
// let rollCount = 0

// while(rollCount <= 3){
//     console.log(currentDiceRoll)
//     currentDiceRoll = Math.floor(Math.random()*6)+1
//     rollCount++
// }


// ACTIVITY 3
// let age=1

// while(age<18){
//     console.log(`Age = ${age}. You're a child!`)
//     age++
//     if(age>=18){
//         console.log(`Age = ${age} You're an adult.`)
//     }
// }


// ACTIVITY 4
// let randomNum
// let randomNumCount = 0

// while(randomNumCount != 6){
//     randomNum = Math.random()
//     console.log(randomNum)
//     randomNumCount++
// }

// Version that outputs 6 random numbers between 1-100
let randomNum
let randomNumCount = 0

while(randomNumCount != 6){
    randomNum = Math.floor(Math.random() *100)+1
    console.log(randomNum)
    randomNumCount++
}


//  ACTIVITY 5

