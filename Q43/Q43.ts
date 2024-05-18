// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names and one array 
//  with the
//  Great added to each magician’s name

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

let magicianNames: string[] = ["Harry Houdini ", "David Copperfield", "David Blaine", "Darren Brown", "Eric Chien"];

let magicianNamesCopy: string[] = [...magicianNames];

let greatMagicianNames: string[] = make_great(magicianNamesCopy);

console.log("Original Magician Names:");
show_magicians(magicianNames);

console.log("\nModified Magician Names:");
show_magicians(greatMagicianNames);
