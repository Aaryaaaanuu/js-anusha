//primitive : call by value
// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score= 10;
let x = "Anusha";  // js is dynamically typed as we dont have to define the datatype



const id = Symbol("456")
const anotherID = Symbol("456")
console.log(id === anotherID); //false as it uniquely defines the object

// Non primitive: call by refrence
// Array, Objects, Functions

 const actors = ["katrina","alia","kiara"]
 let myObj = { //objects are defined insdie curlybraces  //here we are storing objects in the variable let myObj
    name: "Anusha", // key value pair here name: is key Anusha: is the value 
    age: 100,
 }
  const myFunction = function(){
    console.log("Hello world");
  }
myFunction();        // Output: Hello world
console.log(myObj);  // Output: { name: 'Anusha', age: 100 }
console.log(actors);
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (Primitive), Heap (Non-Primitive)
 let myName = "Anusha" // a=anusha in stack
 let anotherName = myName //b=a=anusha (it is copied from a not linked)
 anotherName = "Krishala" // now only the value of b is changed but a stays the same//This confirms that changing b does NOT affect a. They are two separate values in the stack.
 console.log (myName);
 console.log (anotherName); 
 //a still holds the original value.b was changed independently.

 //Heap
 let person1 = { name: "Anusha" }; // object is created
let person2 = person1; // reference to the same object in heap

person2.name = "Alia";

console.log(person1.name); // "Alia"
console.log(person2.name); // "Alia" //person1 is stored in heap, and both person1 and person2 point to the same memory. So changing one affects the other.