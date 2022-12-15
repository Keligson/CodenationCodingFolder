//--------- ACTIVITY 1 ---------
// Add 2 more items to the array and change the initial expression


// let favHolidayDestinations = [
//     "0 Venice, Italy",
//     "1 Paris, France",
//     "2 Barcelona, Spain",
//     "3 Manchester, UK",
//     "4 London, England",
//     "5 Mars, Solar system"
// ]

// for (let i = 0; i < favHolidayDestinations.length; i++){
//     console.log(favHolidayDestinations[i])
// }





//--------- ACTIVITY 2 ---------
// Find even numbers in reverse order


// let evenNumbers = []

// for (let n = 20; n > 0; n--){
//     if (n % 2 == 0) {
//         (evenNumbers.push(n))
//     }
// }

// console.log(`The even numbers between 20 and 0 are; ${evenNumbers}`)





//--------- ACTIVITY 3 ---------
// Find odd numbers 1-30


// let oddNumbers = []

// for (let n = 0; n < 30; n++){
//     if (n % 2 != 0) {
//         (oddNumbers.push(n))
//     }
// }

// console.log(`The odd numbers between 30 and 0 are; ${oddNumbers}`)





//--------- ACTIVITY 3 (Doc typo) ---------
// Create a while loop that checks age. While age is less than 18 log “You’re a child!”. When age is more than 18 log “You’re an adult!”


// let age=1

// while(age<18){
//     console.log(`Age = ${age}. You're a child!`)
//     age++
//     if(age>=18){
//         console.log(`Age = ${age} You're an adult.`)
//     }
// }






//--------- ACTIVITY 4 ---------
//Generate 6 random numbers and log them to the console


// let randNums = []

// for (let r = 0; r < 6; r++){
//     randNums.push(Math.floor(Math.random()*10)+10)
// }
// console.log(randNums)






//--------- ACTIVITY 5 ---------
// Display 4 films stored in an array
// Use a for loop to show each film in the array
// Use an if statement to check if the 3rd film in the array is Ghostbusters
// If it is return “Yay it’s Ghostbusters”
// If it isn’t return “Boo! We want Ghostbusters!"


// let filmsArray = [
//     "Shrek",
//     "Shrek 2",
//     "Ghostbusters",
//     "Shrek 3"
// ]

// for (let f = 0; f < filmsArray.length; f++) {
//     console.log(filmsArray[f])
// }
// if (filmsArray[2] == "Ghostbusters") {
//     console.log("Yay, it's Ghostbusters")
// } else {
//     console.log("Boo! We want Ghostbusters!")
// }






//--------- ACTIVITY 6 ---------
// Generate a random number between 1 and 30 six times
// For each random number generated, check if this number is divisible by 7 or not
// Log out a message to the console if it is divisible by 7 or not


// let randNums = []

// for (let numCount = 0; numCount < 6; numCount++){
//     randNums.push(Math.floor(Math.random()*30)+1)
// }
// console.log(randNums)

// for (let pass = 0; pass < randNums.length; pass++) {
//         if (randNums[pass] % 7 == 0) {
//             console.log(`${randNums[pass]} is divisible by 7`)
//         } else {
//             console.log (`${randNums[pass]} is not divisible by 7`)
//         }
// }






//-----------------------------------
//  ACTIVITY 7
//-----------------------------------
// You have been tasked with building a prototype for a mutual followers program
// Create 2 arrays of followers e.g bobsFollowers & hannahsFollowers
// In these arrays place 4 names as strings
// Make sure there are 2 names that are in both arrays
// Using a nested loop iterate over both arrays and console.log out the matching follower


const bobsFollowers = [
    "Adam",
    "Jordan",
    "Jenny",
    "Bella",
]


const hannahsFollowers = [
    "Jenny",
    "Jordan",
    "Bear",
    "Gerard",
]


for (let mutualScan = 0; mutualScan < 4; mutualScan++) {
    if (bobsFollowers[mutualScan] == hannahsFollowers[mutualScan]) {
        console.log(`${bobsFollowers[mutualScan]} is a mutual follower`)
    }
}

// WORKS ONLY IF MUTUAL FOLLOWER IS IN THE SAME POSITION OF THE ARRAY AS THE OTHER

// MAYBE .PUSH() EACH TO AN ARRAY THEN CHECK THEM THERE