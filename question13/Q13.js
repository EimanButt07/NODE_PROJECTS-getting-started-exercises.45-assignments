// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several
//  examples. Use your list to print a series of statements about these items,
//   such as “I would like to own a Honda motorcycle.”
var vehicles = ["Honda motorcycle", "Corolla", "Civic", "Fortuner", "Audi", "BMW", "Revo", "Land Cruiser", "Mercedes", "Aeroplane", "Jet", "Helicopter", "Yacht"];
vehicles.map(function (items) { return console.log("I would like to own a  ".concat(items)); });
