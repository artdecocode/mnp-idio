const { equal, assert } = require('zoroaster/assert')
const context = require('../context')
const mnpIdio = require('../..')

const mnpIdioTestSuite = {
    context,
    'should be a function'() {
        equal(typeof mnpIdio, 'function')
    },
    'should call package without error'() {
        assert.doesNotThrow(() => {
            mnpIdio()
        })
    },
}

module.exports = mnpIdioTestSuite
