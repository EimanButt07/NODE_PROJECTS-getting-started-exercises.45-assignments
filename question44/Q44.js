"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(...ingredients) {
    console.log("Making a sandwich with the following ingredients:");
    for (const ingredient of ingredients) {
        console.log("- " + ingredient);
    }
    console.log("Enjoy your sandwich!\n");
}
// Call the function with different numbers of arguments
makeSandwich("Chicken", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Beef", "Cheddar Cheese", "Pickles");
makeSandwich("Sausage", "Cheese", "Mustard");
