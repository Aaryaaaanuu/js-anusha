const score = 400
console.log(score);
const balance = 100
console.log(balance);

 console.log(balance.toString().length); //This converts the number 100 into a string "100" and gets the length of the string.
 //Output: 3
 console.log(balance.toFixed(1)); //fixed decimal places.Output is a string, not a number.

 const otherNumber = 3456.45678
 console.log(otherNumber.toPrecision(4)); //data rounding

//+++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math);//Object [Math] {} //Math is a built-in object that holds a bunch of math-related methods and constants."

// Math.PI              // 3.141592653589793
// Math.round(4.7)      // 5
// Math.floor(4.7)      // 4
// Math.ceil(4.1)       // 5
// Math.abs(-10)        // 10
// Math.sqrt(16)        // 4
// Math.pow(2, 3)       // 8
// Math.max(5, 10, 2)   // 10
// Math.min(5, 10, 2)   // 2
// Math.random()        // Random number between 0 and 1
console.log(Math.abs(-7));//op=7
console.log(Math.round(4.76));//op=5
console.log(Math.ceil(4.1));//op=5 Always round UP to the nearest whole number
console.log(Math.floor(4.9));// op=4 It always rounds a number down to the nearest whole number, no matter what the decimal is.
console.log(Math.random());//This generates a random number between 0 and 1 (not including 1)
//op=0.05831193344260188
console.log(Math.floor(Math.random() * 10) + 1);//This generates a random integer between 1 and 10.
//Math.random() → gives a value between 0 and 1

// Math.random() * 10 → gives a value between 0 and 9.999...

// Math.floor(...) → drops the decimal, so result is between 0 and 9

// + 1 → shifts the range up, making it from 1 to 10
console.log(Math.floor(Math.random()*10)+1);//1 ≤ result ≤ 10