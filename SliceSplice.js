//** splice การค้นหาและลบ ทำลายโครงสร้างเดิม */
const data = [10,20,2000,300,600,50]
console.log(data);
data.splice(1,2,9999)// ทำลายโครงสร้าง index start end insert(item)
console.log(data);

//slice การนำ array มาใช้
const data2 = [10,20,2000,300,600,50]
console.log(data2);
const lastData = data2.slice(1,3) // 1,2
console.log(lastData); //[200, 2000]

