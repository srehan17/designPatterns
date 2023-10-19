class Shopper {
    constructor(name='') {
        this._name = name
        this._shoppingList = []
    }

    set name(value){
        this._name  = value
    }

    get name() { return this._name }
    
    shoppingList() {
        return this._shoppingList.join(', ')
    }

    get shoppingList() {
        return this._shoppingList.join(",")
    }
    
    addItemToList(item) {
        this._shoppingList.push(item)
    }

    clone = () => {
        let proto = Object.getPrototypeOf(this)
        let clonedObject = Object.create(proto)

        clonedObject._name = this._name
        clonedObject._shoppingList = [...this._shoppingList]

        return clonedObject
    }
}

module.exports = Shopper