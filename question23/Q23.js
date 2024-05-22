// Conditional Tests: Write a series of conditional tests. Print a statement 
// describing each test and your prediction for the results of each test. 
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var element = 'oxygen';
var atomicNumber = 8;
var isMetal = false;
var isNobleGas = false;
var inPeriod = 2;
// Test 1
console.log("Is element === 'oxygen'? I predict True.");
console.log(element === 'oxygen');
// Test 2
console.log("Is atomicNumber === 8? I predict True.");
console.log(atomicNumber === 8);
// Test 3
console.log("Is oxygen === isMetal? I predict False. ");
console.log(isMetal === false);
// Test 4
console.log("Is oxygen === isNobleGas? I predict False.");
console.log(isNobleGas === false);
// Test 5
console.log("Is inPeriod === 2? I predict true.");
console.log(inPeriod === 2);
//Test 6
console.log("Is element === 'oxygen'? I predict True.");
console.log(element === 'carbon');
// Test 7
console.log("Is atomicNumber === 8? I predict true.");
console.log(atomicNumber === 9);
// Test 8
console.log("Is oxygen === isMetal? I predict false. ");
console.log(isMetal !== isNobleGas);
// Test 9
console.log("Is oxygen === isNobleGas? I predict false.");
console.log(isNobleGas !== isMetal);
// Test 10
console.log("Is inPeriod === 2? I predict true.");
console.log(inPeriod > 3);
