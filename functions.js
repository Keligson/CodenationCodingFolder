// holidayDestination is the function name
const holidayDestination = (country, month) => {
    console.log(`Yay! I'm going on holiday to ${country} in ${month}. I can't wait.`)
    // this is what the function does
}

// holidayDestination("Spain", "June")

// const sayHello=(myName, drink)=>{
//     console.log(`Hi there, how are you? My name is ${myName}. Would you like a ${drink}?`)
// }
// sayHello("Adam", "Irn Bru")


// You can use `return` to a result
// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply(2,5))

// FUNCTIONS CALLING FUNCTIONS
const replenishStock = (productCode) => {
    console.log(`Order product number ${productCode} stock is low!`)
}

const reducePrice = (productCode, originalPrice) => {
    let salePrice = originalPrice /=2
    console.log(`Product number ${productCode} is now £${salePrice}.`)
}

const checkStock = (productCode, quantity, originalPrice) => {
    if (quantity <= 10) {
        replenishStock(productCode)
    } else if (quantity > 100) {
        reducePrice(productCode, originalPrice)
    
    }else{
        console.log("Don't order stock.")
    }
}
checkStock(345678, 200, 100)
