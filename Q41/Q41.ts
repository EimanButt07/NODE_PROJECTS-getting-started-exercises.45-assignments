// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.


// Define an array of magician names
let magicianNames: string[] = ["Harry Houdini ", "David Copperfield", "David Blaine", "Darren Brown", "Eric Chien"];

// Define the function to show magician names
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Call the function passing the array of magician names
showMagicians(magicianNames);

