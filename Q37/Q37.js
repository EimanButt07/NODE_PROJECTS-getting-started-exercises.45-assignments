"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by 
// default with a message that reads I love TypeScript. Make a large shirt and a medium
//  shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt("medium");
// Making a shirt of any size with a different message
make_shirt("small", "Keep coding!");
