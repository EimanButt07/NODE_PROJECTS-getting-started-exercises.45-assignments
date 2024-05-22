//  More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. •
// Use append() to add one new guest to the end of your list. • 
// Print a new set of invitation messages, one for each person in your list.
var guestArr = ["Maheen", "Husna", "Eiman", "Ibad", "Harir"];
var canNotattend = "Husna";
var newGuest = "Dua";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
console.log(guestArr);
// for (const item of guestArr) {
//     console.log(`Dear ${item}, I have a bigger dinner table`)
//   }
var guestBegin = "Shajiya";
guestArr.unshift(guestBegin);
console.log(guestArr);
var middleGuest = "Munazza";
var middleindex = guestArr.length / 2;
guestArr.splice(middleindex, 0, middleGuest);
console.log(guestArr);
guestArr.push("Hoorain");
console.log(guestArr);
for (var _i = 0, guestArr_1 = guestArr; _i < guestArr_1.length; _i++) {
    var item = guestArr_1[_i];
    console.log("Dear ".concat(item, ",  I am excited to extend an invitation to you for a dinner gathering."));
}
