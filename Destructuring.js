//การสลายโครงสร้าง
const colors = ["ขาว", "แดง"]
const [a, b] = colors
//const [,a] = colors //
console.log(b);
//************************* object */
const product = {
    name: "computer",
    price: "15,000",
    stock: "10"

}

const {
    name,
    price,
    stock
} = product

console.log(product);
console.log(name);