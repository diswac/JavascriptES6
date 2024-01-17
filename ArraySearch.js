const data = [100, 200, 300, "Mango", 20, 500, 8000]

const index = data.indexOf(8000) // ได้ index
console.log(index);//6
const serach = data.find(element => element === "Mango") // ได้ ข้อมูลที่ค้น callback function
console.log(serach);
const serachIndex = data.findIndex(element => element === "Mango") // ได้ index callback function
console.log(serachIndex);//3