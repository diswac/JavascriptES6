//short way

fullName = (fname, lname) => fname + ' ' + lname;
console.log(fullName("love", "good"));

customer = fullname => `ชื่อ-สกุล ${fullname}`
console.log(customer("love GOOD"));

//long way 
fullName2 = (fname, lname) => {
    return fname + ' ' + lname;
}

console.log(fullName2("love2", "good2"));
