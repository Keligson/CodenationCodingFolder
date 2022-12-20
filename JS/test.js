// console.log("hello world")

// console.log("Hello, what is your name?".length)
// console.log("hello".toUpperCase())
// Number(12) == 1234
// console.log (Number(12));
// console.log("hello".toUpperCase())
// Number(12).EPSILON


//--------------------
// let firstName = "Adam"
// // console.log (firstName)

// firstName = "Terry"
// console.log (firstName)

// const lastName = "Smith"
// // console.log (lastName)
// lastName = "Jones"
// console.log (firstName)

//--------------------
// let studentFirstName="Adam"
// let studentAge="27"
// let courseStudent=true
// console.log ("Are they a student?:",courseStudent)
// courseStudent=false
// console.log ("Are they a student?:",courseStudent)


// let student1="Name: "+studentFirstName+" "+"Age: "+studentAge+" "
// console.log (student1)

//--------------------
// let modelOfCar = "Volvo"
// let firstName="Mark"
// let occupation="Software Developer"

// console.log(" Hi, my name is " +firstName +". I'm a " +occupation+ " and I drive a " +modelOfCar)

// let modelOfCar = "Volvo"
// let firstName="Mark"
// let occupation="Software Developer"

// console.log(`Hi, my name is ${firstName}. I'm a ${occupation}  and I drive a ${modelOfCar}.`)


//--------- ACTIVITY 2 ---------
// let myName="Adam"
// let age="27"
// let favColour="Green"
// console.log(`Hi, my name is ${name}. I'm a ${age} and my favorite colour is ${favColour}.`)

//--------- ACTIVITY 3 ---------
// let breakfastMeal="protien bar"
// let lunchMeal="cereal"
// let dinnerMeal="sweet & sour prawns with egg noodles"
// console.log(`Today for breakfast I had a ${breakfastMeal}. For lunch I had ${lunchMeal}, and my for dinner I will have ${dinnerMeal}.`)

// breakfastMeal="salad"
// lunchMeal="scrambled eggs"
// dinnerMeal="turkey meatballs with rice"
// console.log(`Today for breakfast I had a ${breakfastMeal}. For lunch I had ${lunchMeal}, and my for dinner I will have ${dinnerMeal}.`)


//-----------------------------
// let a=5
// a=a+3
// console.log(a)

// a+=3
// console.log(a)

//--------- ACTIVITY 4 ---------
// Write code which will calculate how many days from today's date to your birthday
// This must also be output in complete sentance
//Calculate how many days since your birth

// Days between todays date and my next birthday 
// let todaysDate = new Date()
// let birthday = new Date ("2023-02-15")
// let timeDifference = birthday.getTime() - todaysDate.getTime()
// let daysDifference = Math.floor(timeDifference / (1000*60*60*24))

// console.log(`${todaysDate}. ${birthday}. Days between: ${daysDifference}`)

let nextBirthday = new Date ("2023-02-15")
let birthday = new Date ("1995-02-15")
let today  = new Date()
let until = nextBirthday.getTime() - today.getTime()
let from = today.getTime() - birthday.getTime()
let alive = Math.floor(from / (1000*60*60*24))
let days = Math.floor(until / (1000*60*60*24))

// console.log(nextBirthday)
// console.log(today)
// console.log(until)
// console.log(days)

console.log(`Today's date: ${today}. My birthday: ${nextBirthday}. It's ${days} until my birthday! I've been on earth for ${alive} days`)


//--------- IF ELSE ---------
// let hunger="full"

// hunger="hungry"

// hunger="test other"


// if (hunger=="hungry") {
//     console.log("Yes please, I'm starving!")
// }
// else if (hunger=="full")  {
//     console.log("No thanks, I'm stuffed!")
// }
// else{
//     console.log("Oh go on then, why not!")
// }

//--------- ACTIVITY 1 ---------
// let music="test other"
// if (music=="classical") {
//     console.log("Oh how relaxing")
// }
// else if (music=="disco") {
//     console.log("Where are my dancing shoes!")
// }
// else{
//     console.log("Turn it down")
// }

//--------- MINI ACTIVITY 1 ---------
// if (4==="4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// if (4!="4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

//--------- ACTIVITY 2 ---------
// let age=27
// if (age>17) {
//     console.log("Yes, I can server you.")
// }
// else{
//     console.log("No, you aren't old enough.")
// }

//--------- And && EXAMPLE ---------
// let food="ice cream"
// let hunger="full"

// if (hunger=="full" && food=="ice cream") {
//     console.log("Of course, who wouldn't")
// }
// else if (hunger=="hungry" && food=="ice cream") {
//     console.log("Yes please I'm starving,  could I also have a pizza")
// }
// else if  (hunger=="hungry" && food=="sprouts") {
//     console.log("Actually, I can wait")
// }
// else{
//     console.log("No thanks, I'm stuffed")
// }

// let food="chips"

// if (food=="ice cream" || food=="pizza") {
//     console.log("Yay let's eat!!!")
// }
// else if (food=="sprouts" || food=="broccoli") {
//     console.log("Ugh, no thanks.")
// }
// else{
//     console.log("Okay, go on then why not.")
// }

//--------- MINI ACTIVITY 2 ---------
// let weekday="test"
// if (weekday=="saturday" || weekday=="sunday") {
//     console.log("Yay it's the weekend!!")
// }
// else{
//     console.log("Oh no, work again!")
// }

// let weekday="monday"
// if (weekday=="saturday" || weekday=="sunday") {
//     console.log("Yay it's the weekend!!")
// }
// else{
//     console.log(`Oh no it's ${weekday}, work again!`)
// }

// let food="test"

// switch(food) {
//     case "ice cream":
//     case "pizza":
//         console.log("Yay, let's eat")
//         break
//     case "sprouts":
//     case "broccoli":
//         console.log("Ugh, no thanks!")
//         break
//     default:
//         console.log("Okay, go on then, why not.")
// }


//--------- ACTIVITY 4 ---------
// let pizzaTopping="pineapple"

// switch(pizzaTopping) {
//     case "ham":
//     case "mushrooms":
//         console.log("These are important ingredients for my pizza!")
//         break
//     case "chillis":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
//         break
//     case "pineapple":
//         console.log(`${pizzaTopping} should not be on pizza, ever!`)
//         break
//     default:
//         console.log("What topping?")
// }

//--------- ACTIVITY 5 ---------
// let password="OOOOOOOOOO"

// if (password.length<7) {
//     console.log("Password is too short. Must be at least 8 characters long.")
// }
// else{
//     console.log(`${password}`)
// }

//--------- ACTIVITY 6 ---------
// let num = "1011"

// numReversed = [...num].reverse().join("")

// if (num === numReversed) {
//     console.log(`Yes, ${num} is a palindrome!`)
// } else {
//     console.log(`Nope, ${num} isn't a palindrome.`)
// }

//--------- ACTIVITY 7  ---------
// let num = 1

// if (num % 5 === 0 && num % 3 === 0) {
//     console.log("fizz buzz")
// }
// else if (num % 3 === 0) {
//     console.log("fizz")
// }

// else if (num % 5 === 0) {
//     console.log("buzz")
// }

// else {
//     console.log(`${num}`)
// }

//--------- ACTIVITY 8  ---------
//Create if statement that logs to console where someone is at times of day

// E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// EXTRA: get it to say where I am right now in real time

// let time = new Date().getHours();
// if (time >= 7 && time <= 19) {
//    console.log("Red")
// } else {
//     console.log("Blue")
// }
// console.log(time)


// 9:30PM
// split into array
// check if 1st index is > or < 9
// check if 4th index is greater than 9
// if greater return 
// if less, return


// let time = "9:30PM"
// let timeFormatted = [...time]
// check if 1st index is > or < 9
// check if 4th index is greater than 9
// if greater return 
// if less, return
// console.log(timeFormatted)


// COPY PASTE FROM THIS
// numReversed = [...num].reverse().join("")

// if (num === numReversed) {
//     console.log(`Yes, ${num} is a palindrome!`)
// } else {
//     console.log(`Nope, ${num} isn't a palindrome.`)
// }











// let placeOfWork = "Code Nation Office"
// let townOfHome = "Oldham"













// let time = new Date().getHours();
// if (time >= 9 && time <= 17) {
//    console.log("Before 5")
//    console.log(time)
// } else {
//     console.log("Past 5")
//     console.log(time)
// }