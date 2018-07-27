'use strict'
const Path = require('path')
const Hapi = require('hapi')
const Api = require('../lib')

async function createServer (options) {
  const server = Hapi.server()

  await server.register([
    {
      plugin: Api,
      options: {
        graphqlSchemaPath: Path.join(
          __dirname,
          '..',
          'lib',
          'schema',
          'schema.graphql'
        ),
        graphiqlPath: '/graphiql',
        resolversPath: Path.join(__dirname, '..', 'lib', 'resolvers.js')
      }
    }
  ])

  return server
}

module.exports = { createServer }
