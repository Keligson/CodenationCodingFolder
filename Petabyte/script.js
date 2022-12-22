// CONSTS
const projectTitle = document.getElementById("projectTitle")
const petName = document.getElementById("petName");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const choosePet = document.getElementById("choosePet")
// CONSTS


// BUTTON AND IMAGE CONSTS
const eggImage = document.getElementById("eggImage");
const rabbitImage = document.getElementById("rabbitImage");
const monkeyImage = document.getElementById("monkeyImage");
const rabbitButton = document.getElementById("rabbitButton");
const monkeyButton = document.getElementById("monkeyButton");
// BUTTON AND IMAGE CONSTS


const hunger = document.getElementById("hunger")
const happiness = document.getElementById("happiness")
const cleanliness = document.getElementById("cleanliness")





// BASEPET
class BasePet {
    constructor(name, type, age, hunger, happiness, cleanliness) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.hunger = hunger;
        this.happiness = happiness;
        this.cleanliness = cleanliness;

    }
}
// BASEPET

// let pet = {
//     hunger: 50,
//     happiness: 50,
//     cleanliness: 50,
//     feedPet() {
//         this.hunger -= 10;
//         this.cleanliness -= 10;
//         this.happiness -= 5;
//     },
//     giveDrink() {
//         this.hunger -= 10;
//         this.cleanliness -= 10;
//         this.happiness += 5;
//     }
// }





function renderData() {
    hunger.textContent = `Hunger: ${Monkey.hunger}`;
    happiness.textContent = `Happiness: ${Monkey.happiness}`;
    cleanliness.textContent = `Cleanliness: ${Monkey.cleanliness}`;
}


// PET CREATION AND CONSOLE LOG COMMANDS
const Monkey = new BasePet("Terry", "monkey", 27, 100, 100, 100);

console.log(Monkey);

renderData();

renderImage()


















// PET NAME EVENTLISTENER
submit.addEventListener("click", () =>{
    petName.textContent = input.value;
})
// PET NAME EVENTLISTENER






























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

//FUNCTIONS TO CONVERT
































// REFERENCE CODE



























// BUTTON IMAGE CODE ----------------------------------------
function renderImage() {
    eggImage.style.display = "block";
    monkeyImage.style.display = "none";
    rabbitImage.style.display = "none";
}

rabbitButton.addEventListener("click", () => {
    rabbitImage.style.display = "block";
    if (rabbitImage.style.display = "block") {
        monkeyImage.style.display = "none";
        eggImage.style.display = "none";
        // hide "choose your pet"
        // hide "Monkey button"
        // hide "Rabbit button"
    }
})

monkeyButton.addEventListener("click", () => {
    monkeyImage.style.display = "block";
    if (monkeyImage.style.display = "block") {
        rabbitImage.style.display = "none";
        eggImage.style.display = "none";
        // hide "choose your pet"
        // hide "Monkey button"
        // hide "Rabbit button"
    }
})
// BUTTON IMAGE CODE ----------------------------------------