const Shopper = require('./Shopper')

class Employee extends Shopper {
    constructor(name, {age, money=0, employer=''}) {
        super(name, money)
        this.name = name
        this.age = age
        this.money = money
        this.employed = true
        this.employer = employer
    }
}

module.exports = Employee