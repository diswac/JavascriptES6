//การกระจาย Array
const newarr = [50,60,70,100]
const data = [10,20,30,newarr]

console.log(data);  //[ 10, 20, 30, [ 50, 60, 70, 100 ] ]
console.log(data.length) // 4;  
//******************************************** */

const newarr2 = [50,60,70,100]
const data2 = [10,20,30,...newarr2] // กระจาย array
const newNum = [500,600]
data2.push(...newNum)

console.log(data2);
console.log(data2.length)  //7;
/*[
    10, 20,  30, 50,
    60, 70, 100
  ]*/