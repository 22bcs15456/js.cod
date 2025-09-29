const myarray=new Array(1,3,5,6,7,8);
const dc=["RAVAN","kumbha","ravansuidahgfkh"]

//myarray.push(dc)
//console.log(myarray)
//console.log(myarray[3][1]);
const allmyarray=myarray.concat(dc)
console.log(allmyarray);
const allmyarray2=[...myarray,...dc]

console.log(allmyarray2)
//console.log()
const myallarray3=[1,2,3,4,5,6,6,7,7,6,5,5,4,4,3,3]
const allmyrealanotherarray=myallarray3.flat(Infinity)
console.log(allmyrealanotherarray);
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.of({Name:"krishan"}));
let score1=1000;
let score2=3222;
let score3=4000;
console.log(Array.of(score1,score2,score3));

