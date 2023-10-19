const Person = require('./Person')

class Shopper extends Person {
    constructor(name, {age, money=0}) {
        super(name)
        this.name = name
        this.age = age
        this.money = money
        this.employed = false
    }
}

module.exports = Shopper