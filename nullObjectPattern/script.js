class User {
    constructor(id, name){
        this.id = id
        this.name = name
    }

    hasAccess() {
        return this.name == "Bob"
    }
}

class NullUser {
    constructor() {
        this.id = -1
        this.name = "Guest"    
    }

    hasAccess() {
        return false
    }
}
const users = [ new User(1,"Bob"), new User(2,"Carol") ]

const getUser = (id) => {
    let user = users.find(user => user.id === id)
    if (!user) {
        return new NullUser()
    }
    else return user
}

const printUser = (id) => getUser(id)

let user = printUser(7)

console.log(`Hello ${user.name}`)
console.log(user.hasAccess() ? "You have access" : "You don't have access")