'use strict'
require('dotenv').load()

const Fs = require('fs')
const Path = require('path')
const Hapi = require('hapi')
const HapiPino = require('hapi-pino')
const Knex = require('./lib/knex')
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi')
const { makeExecutableSchema } = require('graphql-tools')

const routes = require('./src/routes')

const { NODE_ENV, PORT, DATABASE_URL } = process.env

async function main () {
  const isDev = NODE_ENV === 'development'

  const server = Hapi.server({
    port: PORT
  })

  const plugins = [
    HapiPino,
    {
      plugin: Knex,
      options: {
        connection: DATABASE_URL
      }
    },
    {
      plugin: graphqlHapi,
      options: {
        path: '/graphql',
        graphqlOptions: request => {
          // Set context here, such as extracting user information from the Authorization header

          return {
            schema: makeExecutableSchema({
              typeDefs: Fs.readFileSync(
                Path.join(__dirname, 'lib', 'schema.graphql'),
                'utf8'
              ),
              resolvers: require('./lib/resolvers'),
              inheritResolversFromInterfaces: true
            }),
            context: null
          }
        }
      }
    }
  ]

  if (isDev) {
    plugins.push(require('inert'))
    plugins.push({
      plugin: graphiqlHapi,
      options: {
        path: '/graphiql',
        graphiqlOptions: {
          endpointURL: '/graphql'
        }
      }
    })
  }

  await server.register(plugins)

  if (isDev) {
    server.route([
      {
        method: 'GET',
        path: '/doc/{param*}',
        config: {
          auth: false,
          handler: {
            directory: {
              path: './doc',
              redirectToSlash: true,
              index: true
            }
          }
        }
      }
    ])
  }

  server.route(routes)

  await server.start()
  console.log(`server started at http://localhost:${server.info.port}`)
}

main()
