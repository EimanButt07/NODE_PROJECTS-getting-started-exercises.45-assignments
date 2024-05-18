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



// Array in its original order
let placeArr: string[] = ["Houston", "Maldives", "Turkey", "Kashmir", "Japan"];
console.log("Original order:", placeArr);

// Print your array in reverse alphabetical order without changing the order of the original list
let sortedArr: string[] = [...placeArr];
sortedArr.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", sortedArr);

// Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", placeArr);

// Reverse the order of your list. Print the array to show that its order has changed.
let reverseArr: string[] = [...placeArr].reverse();
console.log("Reversed order:", reverseArr);

// Show that your array is still in its original order by printing it again.
console.log("Original order after reversing:", placeArr);

// Reverse the order of your list again. Print the list to show it’s back to its original order.
let againReverseArr: string[] = [...reverseArr].reverse();
console.log("Reversed again to original order:", againReverseArr);

// Sort the array in alphabetical order. Print the array to show that its order has been changed.
placeArr.sort();
console.log("Sorted in alphabetical order:", placeArr);

// Sort the array in reverse alphabetical order. Print the list to show that its order has changed.
placeArr.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placeArr);