//  More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. •
// Use append() to add one new guest to the end of your list. • 
// Print a new set of invitation messages, one for each person in your list.


let guestArr: string[] = ["Maheen", "Husna", "Eiman", "Ibad", "Harir"];
let canNotattend: string = "Husna"
let newGuest: string = "Dua"
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
console.log(guestArr)


// for (const item of guestArr) {
//     console.log(`Dear ${item}, I have a bigger dinner table`)
//   }

 
let guestBegin: string = "Shajiya";
  guestArr.unshift(guestBegin);
  console.log(guestArr)

let middleGuest: string = "Munazza";
let middleindex = guestArr.length/2
guestArr.splice(middleindex,0,middleGuest)
console.log(guestArr)

guestArr.push("Hoorain")
console.log(guestArr)


for (const item of guestArr) {
console.log(`Dear ${item},  I am excited to extend an invitation to you for a dinner gathering.`)
}