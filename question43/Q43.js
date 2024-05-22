"use strict";
// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names and one array 
//  with the
//  Great added to each magician’s name
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
let magicianNames = ["Harry Houdini ", "David Copperfield", "David Blaine", "Darren Brown", "Eric Chien"];
let magicianNamesCopy = [...magicianNames];
let greatMagicianNames = make_great(magicianNamesCopy);
console.log("Original Magician Names:");
show_magicians(magicianNames);
console.log("\nModified Magician Names:");
show_magicians(greatMagicianNames);
