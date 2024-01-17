const data = [100, 200, 300, 400, 20, 500, 8000]


const filter = data.filter(e => e > 300)

console.log(filter);

//*** */
const employee = [{
        name: "Jhon",
        salary: 60000,
        position: "programer"
    },
    {
        name: "Mary",
        salary: 25000,
        position: "account"
    },
    {
        name: "Cole",
        salary: 15000,
        position: "marketing"
    }
]

const searchsalary = employee.filter(e => {
    return e.salary > 25000
})

console.log(searchsalary);