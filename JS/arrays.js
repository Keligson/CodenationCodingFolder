// let favHolidayDestinations = [
//     "Venice, Italy", // 0
//     "Paris, France", // 1
//     "Barcelona, Spain" // 2
// ]

// console.log(favHolidayDestinations)

// let favPodcasts = [
//     "The Rest Is History",
//     "The Joe Rogan Experience",
//     "Yogpod"
// ]

// console.log(favPodcasts[0])

// console.log(favHolidayDestinations[2])

// favHolidayDestinations[1] = "Florida, USA"

// console.log(favHolidayDestinations)
// console.log(favHolidayDestinations.length)
// console.log(favHolidayDestinations.pop())
// console.log(favHolidayDestinations)

//--------RESEARCH ACTIVITY 1--------
let favPodcasts = [
    "0 The Rest Is History",
    "1 The Joe Rogan Experience",
    "2 Yogpod",
    "3 Uneplainable",
    "4 Triforce!"
]


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

console.log(favPodcasts)
console.log(favPodcasts.slice(-2))








// .splice()

// .unshift()

// .map()



//COPIED CODE------------------------------------------
// USED TO CLEAR THE CONSOLE ON RUN
console.clear()

// ARRAY OF "FILMS"
let films = ["How High", "Friday", "Godfather"]

// THIS WILL LOG THE OUTPUT
console.log("ACTIVTY 1")
console.log("Here are some of my recent watched films", films)
console.log("")

// ACTIVTY 2
console.log("ACTIVTY 2")
console.log("I like to watch!", films[2])
console.log("")

// ACTIVTY 3.5
console.log("ACTIVTY 3.5")
console.log("There is", films.length, "films")
console.log("")

// ACTIVTY 4
console.log("ACTIVTY 4")
console.log("Films: Pop>", films.pop())
console.log("Films: Shift>", films.shift())
console.log("Films: Splice>", films.splice())
console.log("Films: Slice>", films.slice())
console.log("Films: Unshift>", films.unshift())
console.log("Films: MAP>")
console.log("")

// ACTIVTY 5
let favSongs = ["Man in the Mirror", "Mad About Bars - S5-E9", "Who Cares"]
favSongs[3] = "On Top"; favSongs[4] = "In & Out"; 
delete favSongs[4];

console.log("ACTIVTY 5")
console.log(favSongs)

//COPIED CODE 2-------------------------------------------------
let favHolidayDestinations = [
    "Sennen Cove, Cornwall",
    "Berlin, Deutschland",
    "Riverton, New Zealand"
]

let favFilms = [

    "Inception",
    "Rogue One: A Star Wars Story",
    "Star Trek (2009)"
]


console.log(favHolidayDestinations)
console.log(favFilms)

//console.log(favFilms[1])

console.log(favHolidayDestinations.length)

//console.log(favHolidayDestinations.pop())   // removes last element 
                                            // in array and returns 
                                            // that element, the length
                                            // of the array is changed.

//console.log(favHolidayDestinations.shift()) // removes first element
                                            // in array and returns
                                            // that removed element,
                                            // the length of the array
                                            // is changed.

// map() do not understand map - The map() method creates a new array populated
// with the results of calling a provided function on every element 
// in the calling array.

// slice() - do not fully understand slice() - The slice method returns a shallow copy of a portion
// of an array into a new array object selected from start to end
// where start and end represent the index of items in the array.
// The original array is not modified.

// splice() - the splice method changes the contents of an array by 
// removing existing elements and/or addiing new elements in place. 

// unshift() - the unshift method adds one or more elements to the beginning
// of an array and returns the new length of the array.

favFilms.unshift("Blade Runner 2049")

console.log(favHolidayDestinations)
console.log(favFilms)

//Definition and Usage

//map() creates a new array from calling a function for every array element.

//map() calls a function once for each element in an array.

//map() does not execute the function for empty elements.

//map() does not change the original array.