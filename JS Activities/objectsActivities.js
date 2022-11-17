// ACTIVITY 1, 2, 3 and 4
const pet = {
    petName: "Bear",
    typeOfPet: "dog",
    age: 5,
    colour: "Grey",
    petFeatures: ["cute", "annoying", "cheese fiend"]
}

console.log(`I have a pet ${pet.typeOfPet} called ${pet.petName}. He's ${pet.age} years old and is ${pet.colour}. He's quite annoying, but too cute to be mad at.`)


// ACTIVITY 5
let totalCost

const coffeeShop = {
    branch: ["Oldham", "Manchester"],
    food: ["cereal", "chocolate bar", "apple"],
    drink: ["Irn Bru", "Pepsi", "Sprite"],
    price: [1, 1.50, 2, 2.50],
    foodOrder(f) {
        console.log(`You ordered a ${coffeeShop.food[f]}. The price is £${coffeeShop.price[f].toFixed(2)}.`)
        totalCost = coffeeShop.price[f]
    },
    drinkOrder(d) {
        totalCost = totalCost + coffeeShop.price[d]
        console.log(`You ordered a ${coffeeShop.drink[d]}. The price is £${coffeeShop.price[d].toFixed(2)}. Your total cost will be £${totalCost.toFixed(2)}`)
    }
}

coffeeShop.foodOrder(1), coffeeShop.drinkOrder(2)