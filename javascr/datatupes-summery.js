// primitive
// 7 type: string , Number, Boolean ,null, undefined,symbol, BigInt

const score =100
const scoreValue=100.3
const isLoggedIn=false
const outside=null
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber = 734854385245n

// is javsscript static type ya dynamic
//REfrence (non primitive)
//Array , object,Funtions
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3