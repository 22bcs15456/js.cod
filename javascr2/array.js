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
console.log(newarray);
console.log(myarray1);
const myarray4=new array(9,8,7,6,5,4,3);
console.log(typeof myarray4);


//slice,splice
console.log(myarray4.slice(1,5));
myarray4.splice(1,2,3,4,5,6,7);