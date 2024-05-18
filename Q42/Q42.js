"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//  by adding the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
let magicianNames = ["Harry Houdini ", "David Copperfield", "David Blaine", "Darren Brown", "Eric Chien"];
let greatMagicianNames = make_great(magicianNames);
show_magicians(greatMagicianNames);
