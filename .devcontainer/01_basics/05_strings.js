const name = "Anusha" // string literal stored in stack memory
const repoCount = 3
console.log(`Hello my name is ${name} and my repo number is ${repoCount}`) //(backticks `) for string interpolation. so ${name} and ${repoCount} insert the variable values directly into the string.
const gameName = new String ('Anusha-Pokharel-com') // string object stored in heap memory
console.log (gameName[3]); //op= 3 0=A 1=n 2=u 3=s..
console.log (gameName.length); //op=6
console.log (gameName.toUpperCase());
console.log (gameName.charAt(4));
console.log (gameName.indexOf("s"));

const anu = "Anusha"
console.log(anu); //   Anusha
console.log(anu.trim()); //Anusha

// substing mehtod
 const aarru = anu.substring(3, 5); //op= nu
 console.log(aarru); 
//  const hello = anu.slice(-8, 4);
//  console.log(hello);

 //cleaner URLs
 const url = "https://anusha.com/anusha%20pokharel" //the - (hyphen or dash) is used to replace %20, which represents a space in a URL.
 console.log(url.replace("%20","-"));
 const anuuu = "Anuzha"
 console.log(anuuu.replace("z","s")); //op=Anusha

 console.log(url.includes("anusha"));//true
 console.log(url.includes("asp")); //false
 console.log(gameName.split("-")); //op=[ 'Anusha', 'Pokharel', 'com' ]  converts strings to array
 