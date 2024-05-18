// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.


// Define objects representing cities in Pakistan
let citiesInPakistan = [
    {
        name: "Islamabad",
        famousFor: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh"]
    },
    {
        name: "Karachi",
        famousFor: ["Quaid-e-Azam's Mausoleum", "Clifton Beach", "Karachi Port"]
    },
    {
        name: "Lahore",
        famousFor: ["Badshahi Mosque", "Lahore Fort", "Shalimar Gardens"]
    },
    {
        name: "Peshawar",
        famousFor: ["Qissa Khwani Bazaar", "Peshawar Museum", "Bala Hisar Fort"]
    },
    {
        name: "Multan",
        famousFor: ["Multan Fort", "Shrine of Bahauddin Zakariya", "Haram Gate"]
    }
];


// Print information about each city in Pakistan
citiesInPakistan.forEach(city => {
    console.log(`City: ${city.name}`);
    console.log(`Famous for: ${city.famousFor.join(", ")}`);
    console.log("---------------------------------------");
});

