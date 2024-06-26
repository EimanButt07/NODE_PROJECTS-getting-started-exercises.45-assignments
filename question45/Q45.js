"use strict";
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs,
//  such as a color or an optional feature. Print the Object that’s returned to make sure all the information
//  was stored correctly
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...extras) {
    let car = { manufacturer, model, ...Object.fromEntries(extras) };
    return car;
}
let myCar = createCar("Toyota", "Camry", ["color", "red"], ["year", 2023]);
console.log(myCar);
