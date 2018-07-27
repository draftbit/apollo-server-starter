require('dotenv').load()

module.exports = {
  client: 'pg',
  connection: `${process.env.DATABASE_URL}`,
  ssl: true,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
