const fs = require('node:fs')

fs.writeFileSync('file1.txt', "Content of the first file.\n")
fs.writeFileSync('file2.txt', "Content of the second file.\n")

const fd1 = fs.openSync('file1.txt', 'r')
const fd2 = fs.openSync('file2.txt', 'r')

const merged = fs.openSync('merged.txt', 'w')

const file1Text = fs.readFileSync('file1.txt', 'utf-8')
const file2Text = fs.readFileSync('file2.txt', 'utf-8')

fs.writeSync(merged, file1Text + file2Text)
