// ACTIVITY 1
// class Rental {
//     constructor (storeName, storeAddress, contactNum, availableMovies) {
//     this.storeName = storeName;
//     this.storeAddress = storeAddress;
//     this.contactNum = contactNum;
//     this.availableMovies = availableMovies;
//     }
    
// }

// const store1 = new Rental("Oldham", "2, Abbey road", "01611234567", "Shrek 1, Shrek 2, Shrek 3, Shrek 4: Unhinged")
// console.log(store1)


// ACTIVITY 2
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