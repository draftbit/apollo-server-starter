const Pg = require('pg')
const Hoek = require('hoek')
const Knex = require('knex')

Pg.defaults.ssl = process.env.NODE_ENV === 'production'

const DEFAULTS = {
  connection: undefined,
  attach: 'onPreHandler',
  detach: 'tail',
  searchPath: 'public',
  pool: {
    destroy: client => client.end(),
    max: 10,
    min: 2,
    idleTimeoutMillis: 30000,
    log: true
  },
  debug: false,
  acquireConnectionTimeout: 10000
}

async function register (server, options) {
  const config = Hoek.applyToDefaults(DEFAULTS, options)
  const {
    connection,
    pool,
    searchPath,
    acquireConnectionTimeout,
    debug
  } = config

  const knex = Knex({
    client: 'pg',
    connection,
    pool,
    searchPath,
    acquireConnectionTimeout,
    debug
  })

  server.app.knex = knex
}

module.exports = {
  name: 'database',
  register
}
