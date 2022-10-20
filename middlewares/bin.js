const express = require('express')

let exp = {}

exp.public = express.static('public')
exp.json = express.json()
exp.urlencoded = express.urlencoded()

console.log('bin', exp)

module.exports = exp