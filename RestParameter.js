//Rest Parameter
sumnation = (x, y) => {
    return x + y
}


console.log(sumnation(5, 6));
console.log(sumnation(500, 6000));
/*************************************** */
sumnationRestParam = (...numberArr) => {

    let total = 0
    for (const number of numberArr) total+=number // กระจาย numberArr ไปเก็บที่ number 0+500+6000+200
    return total
}
console.log(sumnationRestParam(500, 6000, 200)); //6700