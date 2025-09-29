/*const myarray = [0,1,2,3,4,5,6,7,8];
console.log(myarray);

console.log(myarray.length)
console.log(myarray[0]);
console.log(myarray[myarray.length-1]);
const myarray3 = new Array(2,3,4,5,6,7,8,9)
console.log(myarray[3]);
myarray3.push(10)
myarray3.pop()*/
const myarray1 = [0,1,2,3,4,5,6,7,8];
const myarray2 = [0,1,2,3,4,5,6,7,8];
console.log(myarray1+","+myarray2.toString())
const newArray = myarray1.join();
console.log(newArray);
console.log(myarray1);
const myArray4 = [9,8,7,6,5,4,3];
console.log(typeof myArray4);


//slice,splice
console.time("A");
console.timeLog("A",myArray4);
const myn1=myArray4.slice(1,3);
console.log(myn1);
console.log("B",myArray4)
const myn2 = myArray4.splice(1, 3)
console.log("C ", myArray4);
console.log(myn2);