const fs = require('node:fs')

const fd = fs.openSync('data.txt', 'r')
const buffer = new Buffer(16)
let length = 0
let bytesCount

do {
    bytesCount = fs.readSync(fd, buffer)
    length += bytesCount
} while(bytesCount > 0)
console.log(length)

const buffer2 = new Buffer(16)
fs.readSync(fd, buffer2, 0, 10, Math.floor(length/2))
console.log(buffer2.toString('utf8'))

