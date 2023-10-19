class NumberOfPeople {
    constructor(){
        this.number = 0
    }

    count(){
        return this.number
    }

    incrementNumberOfPeople(){
        return this.number++
    }    
    
    printNumberOfPeople() {
        console.log(`There are ${this.number} of people`)
    }
}


module.exports = new NumberOfPeople()