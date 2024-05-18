// Guest List: If you could invite anyone,
//  living or deceased, to dinner, who would you invite? 
//  Make a list that includes at least three people you’d like to invite to dinner.
//   Then use your list to print a message to each person, inviting them to dinner.
var guestArr = ["Maheen", "Husna", "Eiman", "Ibad", "Harir"];
for (var _i = 0, guestArr_1 = guestArr; _i < guestArr_1.length; _i++) {
    var item = guestArr_1[_i];
    console.log("Dear ".concat(item, ", You are invited to dinner"));
}
