// const basePet = {
//     name: `Base pet`,
//     age: 0,
//     health: 90,
//     mood: ``,
//     moodTypes: [`happy`, `sad`, `normal`],

//     moodCheck () {
//         if (this.health >= 70) {
//             this.mood = this.moodTypes[0]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//         else if (this.health <=30) {
//             this.mood = this.moodTypes[1]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//         else {
//             this.mood = this.moodTypes[2]
//             console.log(basePet.mood)
//             console.log(`${basePet.name} is ${basePet.mood}`)
//         }
//     }

// }



// console.log(basePet);
// basePet.moodCheck();















//------------------------------------------------------
//OOP
// build a class, call the class basePet
// create 2 new objects : cat, dog


const basePet = {
    name: `Base Pet`,
    age: 0,
    type: `Default`,
    health: 100,
    mood: `normal`,
    moodState: [`happy`, `sad`, `normal`],
}

class newPet {
    constructor(name, age, type, health, mood) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.health = health;
        this.mood = mood;
    }
}

const Adam = new newPet(`Adam`, 27, `Human`, 100, ``);
console.log(Adam);

// take mood function that was in my object, use it in the class and run it
// refer back to object before and PDF (page 11 roughly)


















































//--------------------------------------------




// console.log(`Pet's name is: ${basePet.name}`);
// console.log(`Pet's health is: ${basePet.health}`);
// basePet.health -= 50;
// console.log(`Pet's health is: ${basePet.health}`);




//WORKING (OLD MOODCHECK)
// moodCheck () {
//     if (this.health >= 70) {
//         this.mood = `happy`
//         console.log(basePet)
//         console.log(`${basePet.name} is happy`)
//     }
//     else if (this.health <=30) {
//         this.mood = `sad`
//         console.log(basePet)
//         console.log(`${basePet.name} is sad`)
//     }
//     else {
//         this.mood = `normal`
//         console.log(basePet)
//         console.log(`${basePet.name} is normal`)
//     }
// }
//WORKING (OLD MOODCHECK)