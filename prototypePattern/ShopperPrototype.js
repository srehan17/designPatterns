const Shopper = require('./Shopper')

let shopperPrototype = new Shopper()
shopperPrototype.addItemToList('camping knife')
shopperPrototype.addItemToList('tent')
shopperPrototype.addItemToList('backpack')
shopperPrototype.addItemToList('map')

module.exports = shopperPrototype