//--------- ACTIVITY 1 ---------
// Create a class called “Rental”
// This class should have at least the name of the store, the store address, the store contact number, and a list of available movies for rental within the constructor
// Create an object instance called “test” from your class and output it to the console to ensure it’s free from errors


// class Rental {
//     constructor (storeName, storeAddress, contactNum, availableMovies) {
//     this.storeName = storeName;
//     this.storeAddress = storeAddress;
//     this.contactNum = contactNum;
//     this.availableMovies = availableMovies;
//     }
    
// }

// const test = new Rental("Oldham", "2, Abbey road", "0161-123-4567", "Shrek, Shrek 2: Vengeance, Shrek 3: Back From the Dead, Shrek 4: Unhinged")
// console.log(test)









//--------- ACTIVITY 2 ---------
// Write a function that can get all of the available movies and output them to the console
// Write a function which can add a new movie to the list of available movies


class Rental {
    constructor (storeName, storeAddress, contactNumber, availableMovies) {
    this.storeName = storeName;
    this.storeAddress = storeAddress;
    this.contactNumber = contactNumber;
    this.availableMovies = availableMovies;
    }
    getAvailableMovies () {
        return `These are the movies available: ${this.availableMovies}`
    }
    addAvailableMovies (movie) {
        this.availableMovies.push(movie)
    }
}

const store1 = new Rental("Oldham", "2, Abbey road", "0161-123-4567", ["Shrek 1", "Shrek 2", "Shrek 3", "Shrek 4"])
// console.log(store1)
console.log(store1.getAvailableMovies())
store1.addAvailableMovies("Shrek 5")
console.log(store1.getAvailableMovies())













// class Pet {
//     constructor(name, age, type, breed, colour, time) {
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.breed = breed;
//     this.colour = colour;
//     this.lastFed = time;
//     }
//     feedPet (time) {
//         this.lastFed = time;
//         return `Last feed was updated to: ${this.lastFed} for ${this.name}`;
//     }
// }

// const dog6789 = new Pet("Bear", 5, "Dog", "Shih tzu", "Grey", "08:00");
//    console.log(dog6789)







//--------- ACTIVITY 3 ---------
// Movies also have prices, refactor your code so that each movie also has an associated price attached
// Output a list of all movies, including their prices, to the console when queried