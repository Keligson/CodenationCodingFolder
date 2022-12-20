// let stringLet = "let string";
// var stringVar = "var string";

// const newString = () => {
//     let stringLet = "new let string";
//     var stringVar = "new var string";

//     console.log(`Inside function: ${stringLet} IN`); //new
//     console.log(`Inside function: ${stringVar} IN`); //new
// }

// newString();

// console.log(`Outside function: ${stringLet} OUT`); //old
// console.log(`Outside function: ${stringVar} OUT`); //old


//---------------------------------------------------------
// VAR USE CASE, INSTEAD OF HAVING TO USE LET TO GET A RESULT OUT OF A BLOCK

//V1
// let roll = Math.floor(Math.random() * 6) + 1;

// for (var i = 0; roll != 6; i++) {
//     roll = Math.floor(Math.random() * 6) + 1;
// }

// console.log(i);



// V2
// function rollDice() {
//     let roll = Math.floor(Math.random() * 6) + 1;

//     for (var i = 0; roll != 6; i++) {
//         roll = Math.floor(Math.random() * 6) + 1;
//     }

//     console.log(i);
// }

// rollDice()



// V3
// (function () {
//     let roll = Math.floor(Math.random() * 6) + 1;

//     for (var i = 0; roll != 6; i++) {
//         roll = Math.floor(Math.random() * 6) + 1;
//     }

//     console.log(i);
// })();



// V4
// (async () => {
//     let roll = Math.floor(Math.random() * 6) + 1;

//     for (var i = 0; roll != 6; i++) {
//         roll = Math.floor(Math.random() * 6) + 1;
//     }

//     console.log(i);
// })();





//---------------------------------------------------------
// THIS IS A HOF - HIGHER ORDER FUNCTION

// const add = (num1) => {
//     return (num2) => {
//         return num1 + num2;
//     }
// }
// console.log(add(2)(1));

// MULTI-DIMENSIONAL ARRAYS
// let array = [
//     [0, 1, 2], [3, "test1", 5],[6, 7, "test2"],
// ];

// console.log(`ARRAY OUTPUT TEST: ${array[1][1]} + ${array[2][2]}`)





//--------- ACTIVITY 1 ---------
// Write a simple function which logs “Hello Code Nation” to the console
// Then write a higher order function which will run our simple function five times, even though you only call it one time
// Hint: Pass the simple function as a parameter, and this will involve a for loop


// function helloCodeNation() {
//     console.log(`Hello Code Nation`)
// }

// helloCodeNation()


function helloCodeNation() {
    console.log(`Hello Code Nation`)
}

helloCodeNation()






















//--------- ACTIVITY 2 ---------
// The array method .map is an example of a higher order function
// Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3




