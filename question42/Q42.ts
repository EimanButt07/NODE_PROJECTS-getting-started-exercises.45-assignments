// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians
//  by adding the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.


function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}


function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}


let magicianNames: string[] = ["Harry Houdini ", "David Copperfield", "David Blaine", "Darren Brown", "Eric Chien"];


let greatMagicianNames: string[] = make_great(magicianNames);


show_magicians(greatMagicianNames);