//--------- ACTIVITY 1 ---------
// Create an object called pet with key values of petName, typeOfPet, age and colour
// Use dot notation to log a sentence that describes your pet


// let pet = {
//     petName: "Bear",
//     typeOfPet: "dog",
//     age: 5,
//     colour: "Grey",
// }







//--------- ACTIVITY 2 ---------
// Change the colour of your pet


// let pet = {
//     petName: "Bear",
//     typeOfPet: "dog",
//     age: 5,
//     colour: "Grey",
// }

// console.log(pet.colour)
// pet.colour = "Brown"
// console.log(pet.colour)








//--------- ACTIVITY 3 ---------
// Add a key value called petFeatures and add a list of features that describe your pet


// const pet = {
//     petName: "Bear",
//     typeOfPet: "dog",
//     age: 5,
//     colour: "Grey",
//     petFeatures: ["cute", "annoying", "cheese fiend"]
// }

// console.log(`I have a pet ${pet.typeOfPet} called ${pet.petName}. He's ${pet.age} years old and is ${pet.colour}. He's quite annoying, but too cute to be mad at.`)








//--------- ACTIVITY 4 ---------
// Add methods called eat and drink. They should return a string saying [Your pet name] is eating/drinking


// const pet = {
//     petName: "Bear",
//     typeOfPet: "dog",
//     age: 5,
//     colour: "Grey",
//     petFeatures: ["cute", "annoying", "cheese fiend"],
//     eating: true,
//     drinking: true,

//     eatingOrDrinking () {
//         if (this.eating == true && this.drinking == true) {
//             return `${this.petName} is somehow both eating and drinking! Maybe they are having soup?`
//         }
//         else if (this.drinking == true) {
//         return `${this.petName} is drinking.`
//         }
//         else if (this.eating == true) {
//             return `${this.petName} is eating.`
//         }
//         else {
//             return `${this.petName} is not drinking or eating at the moment. Maybe give them some cheese?`
//         }
//     }
// }

// console.log(pet.eatingOrDrinking())










// ACTIVITY 5
// Create an object called coffee shop with key values of branch, drinks with prices and food with prices
// Add methods called drinksOrdered and foodOrdered
// They should return a string saying [Your order] is … with all items chosen with costs, and the total cost


// let totalCost

// const coffeeShop = {
//     branch: ["Oldham", "Manchester"],
//     food: ["cereal", "chocolate bar", "apple"],
//     drink: ["Irn Bru", "Pepsi", "Sprite"],
//     price: [1, 1.50, 2, 2.50],
//     foodOrder(f) {
//         console.log(`You ordered a ${coffeeShop.food[f]}. The price is £${coffeeShop.price[f].toFixed(2)}.`)
//         totalCost = coffeeShop.price[f]
//     },
//     drinkOrder(d) {
//         totalCost = totalCost + coffeeShop.price[d]
//         console.log(`You ordered a ${coffeeShop.drink[d]}. The price is £${coffeeShop.price[d].toFixed(2)}. Your total cost will be £${totalCost.toFixed(2)}`)
//     }
// }

// coffeeShop.foodOrder(1), coffeeShop.drinkOrder(2)


let totalCost

const coffeeShop = {
    branch: ["Oldham", "Manchester"],
    food: ["Cereal", "Chocolate bar", "Apple"],
    drink: ["Irn Bru", "Pepsi", "Sprite"],
    price: [1, 1.50, 2, 2.50],

    drinksOrdered (drinkNum) {
    console.log(`You ordered: ${coffeeShop.drink[drinkNum]}. Price: ${coffeeShop.price[1]}`)
    totalCost = ""
    if (drinkNum == 2) {
        coffeeShop.price[0]
    }
    else if (drinkNum == 3) {
        coffeeShop.price[1]
    }
    // make if statement for Pepsi being 1 and Sprite being 1.50
    }, 




    foodOrdered (foodNum) {
    console.log(`You ordered: ${coffeeShop.food[foodNum]}`)
    }
}

coffeeShop.drinksOrdered(1)