const numberOfPeople = require('./numberOfPeople')
const logger = require('./Logger')

class Employee {
    constructor(name, age){
        this.name = name
        this.age = age
        numberOfPeople.incrementNumberOfPeople()
        logger.log(`New employee ${this.name} created`)
    }
}

module.exports = Employee