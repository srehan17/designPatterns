const shopperPrototype  = require('./ShopperPrototype')

const tom = shopperPrototype.clone()
tom.name = "Tom Taylor"
tom.addItemToList('binoculars')

const steve = shopperPrototype.clone()
steve.name = "Steve Banks"
steve.addItemToList('hat')
steve.addItemToList('cupcakes')

console.log(`${tom.name}: ${tom.shoppingList}`)
console.log(`${steve.name}: ${steve.shoppingList}`)
