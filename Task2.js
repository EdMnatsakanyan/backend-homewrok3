const fs = require('node:fs')

const fd = fs.openSync('data.txt', 'r')
const buffer = new Buffer(64)
fs.readSync(fd, buffer)

console.log(buffer.toString('utf8'))
fs.closeSync(fd)