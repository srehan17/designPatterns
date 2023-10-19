const numberOfPeople = require('./numberOfPeople')
const logger = require('./Logger')

class Shopper {
    constructor(name, age){
        this.name = name
        this.age = age
        numberOfPeople.incrementNumberOfPeople()
        logger.log(`New shopper ${this.name} created`)
    }
}

module.exports = Shopper

