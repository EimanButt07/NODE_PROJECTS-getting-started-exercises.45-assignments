// Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.

// 1st Method

const days: string[] = ["Sunday","Monday","Tusedya","Wednesday","Thursday","Friday","Saterday"]
console.log(days[2])
console.log(days[6])

// 2nd Method

let guestArr: string[] = ["Maheen", "Husna", "Eiman", "Ibad", "Harir"];
console.log(`You are inviting ${guestArr.length} people to dinner.`);

// Introducing an intentional error by accessing an index that doesn't exist
console.log("Third guest:", guestArr[2]); // Index 2 corresponds to "Eiman"

// Correcting the error by accessing a valid index
console.log("Fourth guest:", guestArr[3]); // Index 3 corresponds to "Ibad"