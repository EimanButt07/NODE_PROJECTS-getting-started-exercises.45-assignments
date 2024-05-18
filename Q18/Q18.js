// // Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to
//  show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array in its original order
var placeArr = ["Houston", "Maldives", "Turkey", "Kashmir", "Japan"];
console.log("Original order:", placeArr);
// Print your array in reverse alphabetical order without changing the order of the original list
var sortedArr = __spreadArray([], placeArr, true);
sortedArr.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse alphabetical order:", sortedArr);
// Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", placeArr);
// Reverse the order of your list. Print the array to show that its order has changed.
var reverseArr = __spreadArray([], placeArr, true).reverse();
console.log("Reversed order:", reverseArr);
// Show that your array is still in its original order by printing it again.
console.log("Original order after reversing:", placeArr);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
var againReverseArr = __spreadArray([], reverseArr, true).reverse();
console.log("Reversed again to original order:", againReverseArr);
// Sort the array in alphabetical order. Print the array to show that its order has been changed.
placeArr.sort();
console.log("Sorted in alphabetical order:", placeArr);
// Sort the array in reverse alphabetical order. Print the list to show that its order has changed.
placeArr.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placeArr);
