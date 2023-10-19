let userFactory = require('./userFactory')

let alice = userFactory('Alice', 'employee', 200, 22)
let tom = userFactory('Tom', 100, 30, )

console.log(alice)
console.log(tom)