"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result 
// for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
//  greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
// Tests for equality and inequality with strings
let fruit1 = 'orange';
let fruit2 = 'grapefruit';
console.log("Is fruit1 === fruit2? I predict False.");
console.log(fruit1 === fruit2);
console.log("Is fruit1 !== fruit2? I predict True.");
console.log(fruit1 !== fruit2);
// Tests using the toLowerCase function
let city1 = 'Los Angeles';
let city2 = 'san francisco';
console.log("Is city1.toLowerCase() === city2.toLowerCase()? I predict False.");
console.log(city1.toLowerCase() === city2.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
let num1 = 25;
let num2 = 30;
console.log("Is num1 > num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2);
console.log("Is num2 <= num1? I predict False.");
console.log(num2 <= num1);
// Tests using "and" and "or" operators
let isRaining = true;
let isWeekend = false;
console.log("Is it raining AND weekend? I predict False.");
console.log(isRaining && isWeekend);
console.log("Is it raining OR weekend? I predict True.");
console.log(isRaining || isWeekend);
// Test whether an item is in an array
let groceries = ['apple', 'banana', 'orange'];
console.log("Is 'orange' in groceries? I predict True.");
console.log(groceries.includes('orange'));
// Test whether an item is not in an array
console.log("Is 'grape' not in groceries? I predict True.");
console.log(!groceries.includes('grape'));
