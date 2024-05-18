"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series
//  of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as 
//  You really like bananas!
Object.defineProperty(exports, "__esModule", { value: true });
let favourite_Fruits = ["Mango", "Grapes", "Guava"];
if (favourite_Fruits.includes("Mango")) {
    console.log("Mango is the king of fruits!");
}
if (favourite_Fruits.includes("Grapes")) {
    console.log("Grapes are stress reliever!");
}
if (favourite_Fruits.includes("Guava")) {
    console.log("Guava is very tasty");
}
else {
    console.log("You don't seem to like Guava.");
}
if (favourite_Fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
else {
    console.log("You don't seem to like kiwis.");
}
