const name = "Anusha" // string literal stored in stack memory
const repoCount = 3
console.log(`Hello my name is ${name} and my repo number is ${repoCount}`) //(backticks `) for string interpolation. so ${name} and ${repoCount} insert the variable values directly into the string.
const gameName = new String ('Anusha') // string object stored in heap memory
console.log (gameName[3]); //op= 3 0=A 1=n 2=u 3=s..
console.log (gameName.length); //op=6
console.log (gameName.toUpperCase());
console.log (gameName.charAt(4));
console.log (gameName.indexOf("s"));