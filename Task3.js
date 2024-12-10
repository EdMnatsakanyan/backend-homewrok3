const fs = require('node:fs')

const fd = fs.openSync('data.txt', 'r')
const fd2 = fs.openSync('copy.txt', 'w')

const buffer = new Buffer(16)
let bytesCount

do {
    bytesCount = fs.readSync(fd, buffer)
    fs.writeSync(fd2, buffer, 0, bytesCount)
} while(bytesCount > 0)