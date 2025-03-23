const os = require('os');


//info about current user
const user = os.userInfo();
console.log(user);

//system uptime
console.log(`The system uptime ${os.uptime()} seconds`);

//OS Info
const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS);