// City Names: Write a function called city_country() that takes in the name of a city 
// and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned
function city_country0(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with different city-country pairs
var city1 = city_country0("Lahore", "Pakistan");
var city2 = city_country0("London", "United Kingdom");
var city3 = city_country0("Sydney", "Australia");
console.log(city1);
console.log(city2);
console.log(city3);
