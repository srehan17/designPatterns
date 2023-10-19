// Method 1 of using the Builder Design pattern

class User {
    constructor(name){
        this.name = name
    }
}

class Address{
    constructor(number, street){
        this.number = number
        this.street = street
    }
}
class UserBuilder {
    constructor(name){
        this.user = new User(name)
    }
    setAge(age){
        this.user.age = age
        return this
    }
    setPhone(phone){
        this.user.phone = phone
        return this
    }
    setAddress(number, street) {
        this.user.address = new Address(number, street)
        return this
    }
    build(){
        return this.user
    }
}

let user = new UserBuilder("Bob").setAge(30).setPhone('2232323').setAddress('29', 'Main').build()
console.log(user)


// Method 2 of using the Builder Design pattern - concise and simple

class Employee {
    constructor(name, {age, address, phone = "123-456-789"} = {}){
        this.name = name
        this.age = age
        this.address = address
        this.phone = phone
    }

}

let employee = new Employee("Henry", {age: 20, phone: '2268872937'})
console.log(employee)
