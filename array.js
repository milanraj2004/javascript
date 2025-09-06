const myArr = [0,1,2,3,4,5]
const Hero = ["abc","milan"]
const myArr2 = new Array(1,2,34,5)
console.log(myArr[2]);
//Array Methods
myArr.push(6);
myArr.push(7897726)
myArr.pop()

console.log(myArr);

myArr.unshift(0)
myArr.shift()


console.log(myArr);
console.log(myArr.includes(0));
console.log(myArr.indexOf(0));
console.log(myArr.indexOf(9));
const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

// slice and splice 
console.log("A ",myArr);
 const myn1 = myArr.slice(1,3)
 console.log("B ", myn1);
// splice 
const myn2 = myArr.splice(1,3)
console.log("c ", myArr);
console.log(myn2);






 
