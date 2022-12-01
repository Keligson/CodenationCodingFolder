// Activity 1
//Create an array containing your three favourite films or podcasts

let favPodcasts = [
    "The Rest Is History",
    "The Joe Rogan Experience",
    "Yogpod"
]



// Activity 2
// Log the 1st item in your film array to the console
console.log(favPodcasts[0])




// Activity 3
// Replace the 2nd film in your array with a new film
favPodcasts[1] = "The Tim Dillon Podcast"
console.log(favPodcasts)

// Activity 4
//Research the above methods and try using them with your film array

// let favPodcasts = [
//     "0 The Rest Is History",
//     "1 The Joe Rogan Experience",
//     "2 Yogpod",
//     "3 Uneplainable",
//     "4 Triforce!"
// ]


// .shift()
// Removes the first element from an array and returns that element
// console.log(favPodcasts.shift())

// .slice()
// SLICE will return a copy of a portion of an array
// console.log(favPodcasts.slice(1))
// "[ 'The Joe Rogan Experience', 'Yogpod', 'Uneplainable', 'Triforce!' ]"
// This is because we said to SLICE (copy) from the array ITEM 1 to the LAST ITEM of the array

// console.log(favPodcasts.slice(1, 4))
// Will return Item 1 to 3
// [ 'The Joe Rogan Experience', 'Yogpod', 'Uneplainable' ]


// Activity 5
let favouriteSongs = [
    `Talking Heads - Born Under Punches`,
    `At the Drive-In - Rascuache`,
    `King Krule - Airport Antenatal Airplane`
]

console.log(favouriteSongs)
favouriteSongs.push(`Queens of the Stone Age - Regular John`, `The Clash - Spanish Bombs`)
console.log(favouriteSongs)
favouriteSongs.pop()
console.log(favouriteSongs)