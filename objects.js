// object.property
// person.firstName

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales Assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis","gardening","bungee jumping"]
// }

// console.log(person.firstName, person["lastName"])

// console.log(person["age"],person["lastName"])


// ACTIVITY 1
// const pet = {
//     petName: "Bear",
//     typeOfPet: "dog",
//     age: 5,
//     colour: "Grey",
//     petFeatures: ["cute", "annoying", "cheese fiend"]
// }

// console.log(`I have a pet ${pet.typeOfPet} called ${pet.petName}. He's ${pet.age} years old and is ${pet.colour}. He's quite annoying, but too cute to be mad at.`)


// person.homeOwner = true
// console.log(person)

// pet.colour = "blue"
// console.log(pet)

//---------------

// let day = "Saturday"

// if (day === "Saturday" || day === "Sunday") {
//     console.log(`Great it's ${day}, let's play ${person.hobbies[2]}!`)
// }else{
//     console.log(`Oh no! It's ${day} I hate being a ${person.occupation}`)
// }



//-------TESTING GRAMMAR------
// let day = "Saturday"
// let grammarCheck = ""

// if (day === "Saturday" || day === "Sunday") {
//     console.log(`Great it's ${day}, let's ${grammarCheck} ${person.hobbies[2]}!`)
//     if (person.hobbies == 1 || 2) {
        
//     }else{
        
//     }
// }else{
//     console.log(`Oh no! It's ${day} I hate being a ${person.occupation}`)
// }

//----------------

// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales Assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis","gardening","bungee jumping"],
//     marketingOp () {
//         if (this.homeOwner ==  false && this.age > 25) {
//             return "Send mortgage offer email."
//         }
//         else if (this.homeOwner == false && this.age < 25) {
//             return  "Send summer holiday fun credit card offer."
//         }
//         else if (this.homeOwner == true && this.age > 25) {
//             return "Pension investment offer."
//         }
//         else {
//             return "Send sensible Savings offer."
//         }
//     }
// }

// console.log(person.marketingOp())


// ACTIVITY 4
// const pet = {
//     petName: "Bear",
//     typeOfPet: "dog",
//     age: 5,
//     colour: "Grey",
//     petFeatures: ["cute", "annoying", "cheese fiend"],
//     eating: false,
//     drinking: false,
//     eatingOrDrinking () {
//         if (this.eating == true && this.drinking == true) {
//             return `${this.petName} is somehow both eating and drinking!`
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
// Create an object called coffee shop with key values of branch, drinks with prices and food with prices.
//Add methods called drinksOrdered and foodOrdered. They should return a string saying [Your order] is … with all items chosen with costs, and the total cost




// THE ORDER CMD: coffeeShop.order
//console.log [WHAT YOU ORDERED] + [PRICE]. [TOTAL COST]

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

// do I need seperate const's for each order? THEN input them into the order if?


// if (coffeeShop.food) {
//     console.log("cereal")
// }
// else {
//     console.log("ELSE TEST")
// }


// drinksOrdered (i) {
//     console.log (Your drinks order is ${coffeeShop.drinks[i]}.  This will cost ${coffeeShop.price[i]}.)
// },
// foodOrdered (j) {
//     console.log (Your food order is ${coffeeShop.food[j]}.  This will cost ${coffeeShop.foodprice[j]}.)
// }




// checkStock(345678, 200, 100)

    // order () {
    //     console.log(`You ordered: ${this.food[0]} for `)
    //     console.log(`You ordered: ${this.food} for `)
    // }





// let order = (coffeeShop.food[0])




// let day = "Saturday"

// if (day === "Saturday" || day === "Sunday") {
//     console.log(`Great it's ${day}, let's play ${person.hobbies[2]}!`)
// }else{
//     console.log(`Oh no! It's ${day} I hate being a ${person.occupation}`)
// }






// EXAMPLE COPY FROM
// const replenishStock = (productCode) => {
//     console.log(`Order product number ${productCode} stock is low!`)
// }

// const reducePrice = (productCode, originalPrice) => {
//     let salePrice = originalPrice /=2
//     console.log(`Product number ${productCode} is now £${salePrice}.`)
// }

// const checkStock = (productCode, quantity, originalPrice) => {
//     if (quantity <= 10) {
//         replenishStock(productCode)
//     } else if (quantity > 100) {
//         reducePrice(productCode, originalPrice)
    
//     }else{
//         console.log("Don't order stock.")
//     }
// }
//checkStock(345678, 200, 100)