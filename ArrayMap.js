const data = [100, 200, 300, 400, 20, 500, 8000]
/*
const result = data.map(e => {
    //const a =e*2 // เอาค่าแต่ละตัว * 2
    //return a
    //หรือ ลดรูป
    return e*2
})
*/
//** ลดรูปอีก */
const result = data.map(e => e * 2)
console.log(data);
console.log(result);

// Array Map
const data2 = [{
        day: "01/06/2564",
        weather: "แดดร้อน",
        temp: 27
    },
    {
        day: "03/06/2564",
        weather: "อุ่น",
        temp: 23
    },
    {
        day: "04/06/2564",
        weather: "ฝนตก",
        temp: 18
    }
]
const weather = data2.map(e => e.weather)
const temp = data2.map(e => e.temp)
console.log(weather);
console.log(temp);