//array // they form shallow copy (they do share the same refrecnce)
const myArr = [0, 3, 4, 5, 6, 7]
const myHeros = ["anu", "aaru"]

const myArr3 = new Array(1, 3, 4, 5 )
console.log(myArr[4]);

//array methods
  myArr.push(8) //adds the value to array at the end
  myArr.pop() // removes array from the last
  
  myArr.unshift(9) //add elements to the beginning of an array
  myArr.shift() // removes array from the begining
  
  const newArr = myArr.join("-") 
  console.log(typeof newArr); //string
  console.log(newArr); //0-3-4-5-6-7

  //slice 
  // Returns a shallow copy of a portion of the array.
  // Does not change the original array.
  // end is not included.
  const fruits = ["apple", "banana", "cherry", "date"];
  const sliced = fruits.slice(1, 3); // index 1 to 2
  
  console.log(sliced); 
  console.log(fruits);

  //splice

const removed = fruits.splice(1, 2); // remove 2 items starting from index 1

console.log(removed); // ["banana", "cherry"]
console.log(fruits);