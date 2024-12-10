const fs = require('node:fs')

const fd = fs.openSync('example.txt', 'w+')
fs.writeSync(fd, '1234567890')

fs.writeSync(fd, 'AB', 5)