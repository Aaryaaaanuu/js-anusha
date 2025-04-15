let score = "33"
console.log(typeof score);
console.log(typeof(score)); // it is same way as above but its called the method way
//now lets do the type conversion
let valueInNumber = Number (score); // this converts "33ab" into a number using Number() function.
let str1 = "hello"
let str3 = " Anusha" // you need to give space here to have space in between
let str4 = str1 + str3
console.log(str4);

//operations
console.log( 3**3); // it becomes 3^3
console.log(3^3); // this gives 0 does not gives power in js

//string addition
console.log("1" + 3); //op =13 as string is in the first
console.log(1 + "3"); // op=13 as it just concatenate the number with the srting
console.log("1" + 3 + 3); //op=133
console.log(1 + 3 + "3") //op= 43 as it adds the 1st two strings and concatenate the last string with the previous addition

//special or tricky conversion
//unary plus operations: converts  its operand to a number
console.log(+true); //true=1
console.log(+false); //false obvi=0
console.log(+""); //empty bracket=0
console.log(+null); //null=0
console.log(+[]); // empty array =0

//perfix and postfix operators
let a = 5;
let b = ++a; // prefix: a is incremented first, then assigned to b
//First, increment a → now a = 6
//Then, assign that to b → so b = 6
console.log(a); // 6
console.log(b); // 6

let x = 5;
let y = x++; // postfix: x is assigned to y, then x is incremented
//First, assign x to y → so y = 5
//Then, increment x → now x = 6
console.log(x); // 6
console.log(y); // 5