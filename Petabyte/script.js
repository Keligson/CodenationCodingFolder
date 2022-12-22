// CONSTS ----------------------------------------
const projectTitle = document.getElementById("projectTitle")
const petName = document.getElementById("petName");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const choosePet = document.getElementById("choosePet")
const petChooseText = document.getElementById("petChooseText")
// CONSTS ----------------------------------------


// BUTTON AND IMAGE CONSTS ----------------------------------------
const eggImage = document.getElementById("eggImage");
const rabbitImage = document.getElementById("rabbitImage");
const monkeyImage = document.getElementById("monkeyImage");
const rabbitButton = document.getElementById("rabbitButton");
const monkeyButton = document.getElementById("monkeyButton");
// BUTTON AND IMAGE CONSTS ----------------------------------------


// PET STATS CONSTS ----------------------------------------
const hunger = document.getElementById("hunger")
const happiness = document.getElementById("happiness")
const cleanliness = document.getElementById("cleanliness")
// PET STATS CONSTS ----------------------------------------


if (rabbitImage.style.display = "block") {
    eggImage.style.display = "block";
    monkeyImage.style.display = "none";
    rabbitImage.style.display = "none";

    petStats.style.display = "none";

    feedButton.style.display = "none";
    playButton.style.display = "none";
    cleanButton.style.display = "none";
}

// BUTTON IMAGE CODE ----------------------------------------

// function hideStatButtons() {
//     petStats.style.display = "none";
//     feedButton.style.display = "none";
//     playButton.style.display = "none";
//     cleanButton.style.display = "none";
// }


// PET NAME EVENTLISTENER ----------------------------------------
submit.addEventListener("click", () =>{
    petNameEmpty.textContent = input.value;
    submit.style.display = "none";
    input.style.display = "none";
})
// PET NAME EVENTLISTENER ----------------------------------------

rabbitButton.addEventListener("click", () => {
    rabbitImage.style.display = "block";
    if (rabbitImage.style.display = "block") {
        monkeyImage.style.display = "none";
        eggImage.style.display = "none";

        petChooseText.style.display = "none";
        monkeyButton.style.display = "none";
        rabbitButton.style.display = "none";

        petStats.style.display = "block";

        feedButton.style.display = "block";
        playButton.style.display = "block";
        cleanButton.style.display = "block";
    }
})

monkeyButton.addEventListener("click", () => {
    monkeyImage.style.display = "block";
    if (monkeyImage.style.display = "block") {
        rabbitImage.style.display = "none";
        eggImage.style.display = "none";

        petChooseText.style.display = "none";
        monkeyButton.style.display = "none";
        rabbitButton.style.display = "none";

        petStats.style.display = "block";

        feedButton.style.display = "block";
        playButton.style.display = "block";
        cleanButton.style.display = "block";
    }
})
// BUTTON IMAGE CODE ----------------------------------------


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


let monkeyPet = {
    hunger: 90,
    happiness: 75,
    cleanliness: 50,
}

console.log(monkeyPet)

// petStats.hunger

function feedPet() {
    this.hunger -= 10;
    this.cleanliness -= 10;
    this.happiness -= 5;
}




// if the user clicks the monkey button it will create a monkey const



function renderData() {
    hunger.textContent = `Hunger: ${Monkey.hunger}`;
    happiness.textContent = `Happiness: ${Monkey.happiness}`;
    cleanliness.textContent = `Cleanliness: ${Monkey.cleanliness}`;
}


// COMMANDS ----------------------------------------
// const Monkey = new BasePet("Terry", "monkey", 27, 100, 100, 100);

// console.log(Monkey);

renderData();






// COMMANDS ----------------------------------------


















































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

































// OLD CODE
// function renderImage() {
//     eggImage.style.display = "block";
//     monkeyImage.style.display = "none";
//     rabbitImage.style.display = "none";

//     petStats.style.display = "none";

//     feedButton.style.display = "none";
//     playButton.style.display = "none";
//     cleanButton.style.display = "none";
// }
