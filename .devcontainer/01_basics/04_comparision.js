console.log(undefined == 0);  // false :undefined is not loosely equal to 0 ,Only null == undefined is true,  So this is false
console.log(undefined > 0);   // false :NaN > 0 → false
console.log(undefined >= 0);  // false :NaN >= 0 → false
 
console.log(null == 0); //false but null` is **only loosely equal to undefined**, not to `0`
console.log(null > 0);  //false 0>0
console.log(null >= 0); //true  0>=0
//In comparisons like `>=` or `<`, `null` gets converted to a number (`0`), but in `==`, it doesn’t.

// == vs === (=== checks more strictly as it also checks its data type)
console.log("3"=== 3); //false
console.log("4"== 4); //true
