//--------- ACTIVITY 1 ---------
// Create an array containing your three favourite films or podcasts


// let favPodcasts = [
//     "The Rest Is History",
//     "The Joe Rogan Experience",
//     "Yogpod"
// ]





//--------- ACTIVITY 2 ---------
// Log the 1st item in your film array to the console


// console.log(favPodcasts[0])





//--------- ACTIVITY 3 ---------
// Replace the 2nd item in your array with a new item


// favPodcasts[1] = "The Tim Dillon Podcast"
// console.log(favPodcasts)





//--------- ACTIVITY 4 ---------
// Research the methods: .shift(), .slice(), .map(), .unshift(), .splice()
// Try using them with your podcast array


//-----------------
// Test Array
// let favPodcasts = [
//     "The Rest Is History",
//     "The Joe Rogan Experience",
//     "Yogpod",
//     "Uneplainable",
//     "Triforce!"
// ]
//-----------------



//-----------------
// .shift()
// Removes the first element from an array and returns that element

// console.log(favPodcasts.shift())
// console.log(favPodcasts)
//-----------------






//-----------------
// .slice()
// SLICE will return a copy of a portion of an array

// console.log(favPodcasts.slice(1))
// "[ 'The Joe Rogan Experience', 'Yogpod', 'Uneplainable', 'Triforce!' ]"
// This is because we said to SLICE (copy) from the array ITEM 1 to the LAST ITEM of the array

// console.log(favPodcasts.slice(1, 4))
// Will return Item 1 to 3
// [ 'The Joe Rogan Experience', 'Yogpod', 'Uneplainable' ]
//-----------------






//-----------------
// .map()
// MAP creates a new array with the results of calling a provided function on every element in the calling array

// let mapArray = favPodcasts.map(x => x + ` podcast`)
// console.log(mapArray)
//-----------------





//-----------------
//.unshift()
// UNSHIFT adds one or more elements to the beginning of an array and returns the new length of the array

// console.log(favPodcasts.unshift("Forehead Fables", "Dr. Kyle Gillett"))
// console.log(favPodcasts)
//-----------------





//-----------------
// .splice()
// SPLICE changes the items of an array by removing or replacing current items and/or adding new items in place

// Inserts "Forehead Fables" at index 1
// favPodcasts.splice(1, 0, "Forehead Fables")
// console.log(favPodcasts)

// Replaces 1 the item "Triforce!" at index 4 with "Dr. Kyle Gillett"
// favPodcasts.splice(4, 1, "Dr. Kyle Gillett")
// console.log(favPodcasts)





//--------- ACTIVITY 5 ---------
// Create a list of your 3 favourite songs
// Log them to the console
// Add another 2 songs to the list using a method
// Now remove the last song


// let favouriteSongs = [
//     `Talking Heads - Born Under Punches`,
//     `At the Drive-In - Rascuache`,
//     `King Krule - Airport Antenatal Airplane`
// ]
// console.log(favouriteSongs)


// favouriteSongs.push(`Queens of the Stone Age - Regular John`, `The Clash - Spanish Bombs`)
// console.log(favouriteSongs)


// favouriteSongs.pop()
// console.log(favouriteSongs)