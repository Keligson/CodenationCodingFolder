class Cyberpet {
    constructor(name, age, colour, gender, type) {
        this.name = name;
        this.age = age;
        this.colour = colour;
        this.gender = gender;
    }
}

class Typeofpet extends Cyberpet {
    constructor(name, age, colour, gender, type) {
        super(name, age, colour, gender, type)
        this.type = type;
        let petSelect = this.type = type
        if (petSelect == "Dragon") {
                this.type = "Type1 Dragon";
            }
            else if (petSelect == "Rat") {
                this.type = "Type2 Rat";
            }
            else {
                this.type = "Type3 OTHER";
                //return
            }
    }
}


//COMMANDS
// const BELLA = new Cyberpet("Bella", 2, "Red", "Female");


const BELLA = new Typeofpet("Bella", 2, "Red", "Female", "2");

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