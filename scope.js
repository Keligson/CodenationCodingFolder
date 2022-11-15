let stringLet = "let string";
var stringVar = "var string";

const newString = () => {
    let stringLet = "new let string";
    var stringVar = "new var string";

    console.log(`Inside function: ${stringLet} IN`); //new
    console.log(`Inside function: ${stringVar} IN`); //new
}

newString();

console.log(`Outside function: ${stringLet} OUT`); //old
console.log(`Outside function: ${stringVar} OUT`); //old


//---------------------------------------------------------
// VAR USE CASE, INSTEAD OF HAVING TO USE LET TO GET A RESULT OUT OF A BLOCK


let roll = Math.floor(Math.random() * 6) + 1;

for (var i = 0; roll != 6; i++) {
    roll = Math.floor(Math.random() * 6) + 1;
}

console.log(i);


//---------------------------------------------------------


