//make object

//v1 
const basket = {
    fruit: "Mango",
    exp: "1990-08-20",
    mall: "Bangkapi",
}

const customerName = "Disorn Wachkama"
const age = "26"
const address = "Bangkok"
const customer = {
    customerName,
    age,
    address,
    showData() {// Method
        console.log("ข้อมูลลูกค้า " +customerName);
    }
}

customer.showData()
console.log(basket.exp);