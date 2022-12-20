const petName = document.getElementById("petName");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const choosePet = document.getElementById("choosePet")

submit.addEventListener("click", () =>{
    petName.textContent = input.value;
})

// choosePet.addEventListener("click", () =>{
//     heading.style.color = "red"; 
// })

choosePet.addEventListener("click", () =>{
    if (choosePet.option = "Monkey")    
        heading.style.color = "red"; 
    })





// BASEPET
class BasePet {
    constructor(name, age, healthLevel, hungerLevel, cleanLevel, happyLevel) {
        this.name = name;
        this.age = age;
        this.healthLevel = healthLevel;
        this.hungerLevel = hungerLevel;
        this.cleanLevel = cleanLevel;
        this.happyLevel = happyLevel;
    }
}
// BASEPET

// healthCheck() {

// }




// PET CREATION AND CONSOLE LOG COMMANDS
const Adam = new BasePet(`adam`, 27, 100, 100, 100, 100);
console.log(Adam);

// PET CREATION AND CONSOLE LOG COMMANDS











// FUNCTIONS

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


// FUNCTIONS












// FUNCTIONS TO CONVERT

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


// // FUNCTIONS TO CONVERT