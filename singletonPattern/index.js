const Shopper = require('./Shopper')
const Employee = require('./Employee')
const numberOfPeople = require('./numberOfPeople')
const logger = require("./Logger")

logger.log("starting the app")

const employees = [new Employee("bob", 29), new Employee("Henry", 30)]
const shoppers = [new Shopper("Hi", 28), new Shopper("Ten", 32)]

console.log(`There are ${logger.count()} log messages`)
console.log(`Number of people is ${numberOfPeople.count()}`)

logger.logs.map(log => console.log(log.message))