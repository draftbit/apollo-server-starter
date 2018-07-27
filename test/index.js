'use strict'
const Expect = require('expect')
const Common = require('./common')
const { it, describe } = global // Make the linter happy about using globals.

describe('API', () => {
  it('creates a new server', async () => {
    const server = await Common.createServer()
    Expect(server).not.toBeUndefined()
  })
})
