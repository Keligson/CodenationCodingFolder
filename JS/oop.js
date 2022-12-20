// STAGE 1

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
//     this.lastFed = time;
//     return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
//    }

//    const bella = new Pet("Bella", "Barns", 2, "Dog", "GS", "B&T", "8:00");
//    const bear = new Pet("Bear", 5, "Dog", "ST", "Grey", "17:00", "17:00")

// console.log(bella)
// console.log(bear)














//STAGE 2

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
//     this.lastFed = time;
//     return `Last feed updated to: ${this.lastFed} for ${this.name}`;
//     }
//    }

//    class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mtime) {
//     super(name, age, type, breed, colour, time);
//     this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//     this.lastMeds = time;
//     return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
//     }
//    }


// const bella = new Pet("Bella", "Barns", 2, "Dog", "GS", "B&T", "8:00")
// const bear = new PetMeds("Bear", 5, "Dog", "ST", "Grey", "17:00", "17:00")


// console.log(bella)
// console.log(bear)









   
// const Bella = new Pet("Bella", 2, "Dog", "GS", "B&T", "08:00");
// const Barney = new PetMeds("Barney", 4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");
// const Betty = new PetMeds("Betty", 4, "Dog", "SH", "White", "10:00");

















//    const dog6789 = new Pet("Bear", 5, "Dog", "Shih tzu", "Grey", "08:00");
//    const dog6790 = new Pet("Test", 999, "Alien", "Test", "Test", "08:00");
//    console.log(dog6789.feedPet("17:00"));
//    console.log(dog6789);
//    console.log(dog6790);


class Pet {
    constructor(firstname, surname, age, type, breed, colour, time) {
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.type = type;
    this.breed = breed;
    this.colour = colour;
    this.lastFed = time;
    }
    get petInfo () {
    return `${this.firstname} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (name) {
        const array = name.split(` `);
        this.firstname = array [0];
        this.surname = array[1]
    }
    get fullName() {
        return `${this.firstname} ${this.surname}`
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
}

const bella = new Pet("Bella", "", 2,  "Dog", "GS", "B&T", "08:00")
console.log(bella)
bella.fullName = "Bella Crompton"
console.log(bella)
console.log(bella.fullName)







// class PetMeds extends Pet {
//     constructor(name, age, type, breed, colour, time, mtime) {
//         super(name, age, type, breed, colour, time);
//         this.lastMeds = mtime;
//     }
//     giveMeds (time) {
//         this.lastMeds = time;
//         return `Last meds was updated to: ${this.lastMeds} for ${this.name}`;
//     }
// }

// const bella = new Pet("Bella", "Barns", 2, "Dog", "GS", "B&T", "8:00");
// const barney = new PetMeds("Barney",  4, "Cat", "Dom-Short", "B&G", "10:00", "13:00");
// const betty = new Pet("Betty", 4, "Dog", "SH", "White", "10:00");
// const bear = new PetMeds("Bear", 5, "Dog", "ST", "Grey", "17:00", "17:00")


// console.log(bella.petInfo)
// bella.fullName = "Bella Barns"
// console.log(bella)

