let Employee = require('./Employee')
let Shopper = require('./Shopper')

let userFactory = (name, type, money = 0, age, employer) => {
    if (type === "employee") {
        return new Employee(name, {money, age, employer})
    }    
    else {
        return new Shopper(name, {age, money})
    }
} 

module.exports = userFactory