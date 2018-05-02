const { resolve } = require('path')
const { createReadStream, createWriteStream } = require('fs')

const from = resolve(__dirname, 'structure/_yarn.unlock')
const to = resolve(__dirname, 'structure/yarn.lock')

const rs = createReadStream(from)
const ws = createWriteStream(to)

rs.pipe(ws)
