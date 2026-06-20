const  os = require('os') // builtin module

// info about current user

const  user = os.userInfo()
console.log(user)

console.log(`the sys uptime is ${os.uptime()}`)



const currentOS = {
    name : os.type(),

    release:os.release(),
    totmem : os.totalmem(),
    freemem : os.freemem(),

}
console.log(currentOS)