const os = require('os')
const { parse } = require('path')
//infot abour current User
const user = os.userInfo()
console.log(user)
//Methos Returns system Uptime in seconds
console.log(`System Uptime is ${os.uptime()} seconds`)
const currentOs={
    name:os.type(),
    release:os.release(),
    ver:os.version(),
    TotalMem:os.totalmem()/1024,
    freeMem:os.freemem()/1024,
    
}
console.log(systeminfo)
