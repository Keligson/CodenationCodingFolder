const heading = document.getElementById("heading");

heading.addEventListener("click",()=>{
    heading.style.color = "red";
});


const petName = document.getElementById("petName");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", () =>{
    petName.textContent = input.value;
})

//CONVERT
class Cyberpet {
    constructor(name, age, mood, hungerLevel, cleanLevel) {
        this.name = name;
        this.age = age;
        this.mood = mood;
        this.hungerLevel = hungerLevel;
        this.cleanLevel = cleanLevel;
    }
}
//CONVERT

// BASE PET - CONVERT TO CLASS
const basePet = {
    name: `Base pet`,
    age: 0,
    health: 100,
    mood: ``,
    moodTypes: [`happy`, `sad`, `normal`],

    moodCheck () {
        if (this.health >= 70) {
            this.mood = this.moodTypes[0]
            console.log(basePet.mood)
            console.log(`${basePet.name} is ${basePet.mood}`)
        }
        else if (this.health <=30) {
            this.mood = this.moodTypes[1]
            console.log(basePet.mood)
            console.log(`${basePet.name} is ${basePet.mood}`)
        }
        else {
            this.mood = this.moodTypes[2]
            console.log(basePet.mood)
            console.log(`${basePet.name} is ${basePet.mood}`)
        }
    }

}
// BASE PET - CONVERT TO CLASS