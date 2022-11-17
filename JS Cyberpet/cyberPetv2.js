class Cyberpet {
    constructor(name, age, colour, gender) {
        this.name = name;
        this.age = age;
        this.colour = colour;
        this.gender = gender;
        // this.cleanLevel = cleanLevel;
    }
    // petClean (cleanLevel) {
    //     this.cleanLevel = cleanLevel;
    //     let petSelect = this.clean = clean
    //     if (petSelect == "Clean") {
    //             this.clean = "Type1: Clean";
    //         }
    //         else if (petSelect == "Unclean") {
    //              this.clean = "Type2: Unclean";
    //          } else {
    //             this.clean = "Type3: OTHER CLEAN";
    //             //return
    //         }
    //     }
    // }
    // petHunger (hungerLevel) {
    //     this.hungerLevel = hungerLevel;
    //     if (this.hungerLevel == "hungry") {
    //         return `Ok, ${this.name}, I'll give you some food.`
    //     } else {
    //         return `${this.name}, the food can wait until later`
    //     }
    // }
}

// class Typeofpet extends Cyberpet {
//     constructor(name, age, colour, gender, type) {
//         super(name, age, colour, gender)
//         this.type = type;
//         let petSelect = this.type = type
//         if (petSelect == "Dragon") {
//                 this.type = "Type1: Dragon";
//             }
//             else if (petSelect == "Rat") {
//                 this.type = "Type2: Rat";
//             }
//             else {
//                 this.type = "Type3: OTHER";
//                 //return
//             }
//     }
// }


class Typeofpet extends Cyberpet {
    constructor(name, age, colour, gender, type) {
        super(name, age, colour, gender)
        this.type = type;
        if (this.type == "Dragon") {
            }
            else if (this.type == "Rat") {
            }
            else {
                this.type = "Other";
            }
    }
}

const BELLA = new Typeofpet("Bella", 2, "Red", "Female", "Dragon");


//COMMANDS
// const BELLA = new Cyberpet("Bella", 2, "Red", "Female");




// const BELLA = new petClean("Bella", 2, "Red", "Female", "Rat", "Clean");

console.log(BELLA)
































//BACKUP1
// class Typeofpet extends Cyberpet {
//     constructor(name, age, colour, gender, type) {
//         super(name, age, colour, gender, type)
//         this.type = type;
//     }
// }
//BACKUP1

//BACKUP2
// class Typeofpet extends Cyberpet {
//     constructor(name, age, colour, gender, type) {
//         super(name, age, colour, gender, type)
//         let petSelect = BELLA.Typeofpet
//         if (petSelect == "Dragon") {
//                 this.type = type;
//             }
//             else if (petSelect == "Bella") {
//                 this.type = type;
//             }
//             else {
//                 console.log("OTHER")
//                 // this.type = type;
//             }
//     }
// }
//BACKUP2




// I think we need to add 1 group class or 3 individual classes "happiness" for play function, "hunger" for feed function, and "cleanliness" for clean function (note for when everyone gets back - Adam)
// I was thinking that we need to put in an array under mood: ["happy","sad","hungry","angry","etc"] and these get invoked by the funtions - Nick