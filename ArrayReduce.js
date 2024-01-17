//Array Reduce
const data = [10, 20, 30, 40]

const result = data.reduce((value, e) => {
    //console.log(value);
    const total = e + value
    return total
}, 0)
console.log(result);
//** ลดรูป */
const result2 = data.reduce((value, e) => e + value, 0)
console.log(result2);