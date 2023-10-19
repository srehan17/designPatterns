class Logger {
    constructor(){
        this.logs = []
    }

    log(message){
        const timestamp = new Date().toISOString()
        this.logs.push({message, timestamp})
        console.log(`${timestamp} - ${message}`) 
    }

    count() {
        return this.logs.length
    }
}

module.exports = new Logger()