const { resolve } = require('path')
const { renameSync } = require('fs')

const oldPath = resolve(__dirname, '../structure/_yarn.lock')
const newPath = resolve(__dirname, '../structure/yarn.lock')

renameSync(oldPath, newPath)
