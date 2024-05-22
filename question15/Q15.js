// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestArr = ["Maheen", "Husna", "Eiman", "Ibad", "Harir"];
for (var _i = 0, guestArr_1 = guestArr; _i < guestArr_1.length; _i++) {
    var item = guestArr_1[_i];
    console.log("Dear ".concat(item, ", You are invited to dinner"));
}
var canNotattend = "Husna";
console.log(canNotattend + " " + "can not make it for dinner");
var newGuest = "Dua";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
console.log(guestArr);
for (var _a = 0, guestArr_2 = guestArr; _a < guestArr_2.length; _a++) {
    var item = guestArr_2[_a];
    console.log("Dear ".concat(item, ", You are cordinally invited to a dinner"));
}
