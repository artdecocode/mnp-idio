const { resolve } = require('path')
const { unlink } = require('fs')

const file = resolve(__dirname, 'structure/_yarn.unlock')
unlink(file, () => {
  console.log('removed file _yarn.unlock')
})
