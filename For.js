const data = [100,200,300,500,20,500,8000]
console.log(data);
//data.sort()
console.log(data);
//** for loop */
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element>300) break
    console.log(`ลำดับที่ ${index+1} = ${element}`);
}

//** forEach ใช้แบบไม่ตรวจเงื่อนไข */
data.forEach(element => { //element = ตัวเก็บค่า
    console.log(element);
});

//** forEach หาผลรวมแต่ละรอบ */
let sum = 0
data.forEach(element => { //element = ตัวเก็บค่า
    sum+=element
    console.log(sum);
});

//** forOf ใช้ break ได้ */
for (const iterator of data) {
    if (iterator>300) break
    console.log(iterator);
}