const {
  CREATE_UPDATE_MODIFIED_COLUMN_FUNCTION,
  DROP_UPDATE_MODIFIED_COLUMN_FUNCTION,
  createTimestampAutoUpdateTrigger
} = require('../src/utils/pg/updateModifiedColumn')

exports.up = async (knex, Promise) => {
  await knex.schema.raw(CREATE_UPDATE_MODIFIED_COLUMN_FUNCTION)

  await knex.schema.createTable('guests', t => {
    t.increments()
    t.timestamps(true, true)
    t.text('first_name').notNullable()
    t.text('last_name').notNullable()
    t.text('email')
      .notNullable()
      .unique()
  })

  await knex.schema.raw(createTimestampAutoUpdateTrigger('guests'))

  await knex.schema.createTable('reservations', t => {
    t.increments()
    t.timestamps(true, true)
    t.date('arrival_date').notNullable()
    t.date('departure_date').notNullable()
    t.integer('guests').notNullable()
  })

  await knex.schema.raw(createTimestampAutoUpdateTrigger('reservations'))

  await knex.schema.createTable('guest_reservations', t => {
    t.increments()
    t.timestamps(true, true)
    t.integer('guest_id')
      .references('guests.id')
      .notNullable()
    t.integer('reservation_id')
      .references('reservations.id')
      .notNullable()
  })

  await knex.schema.raw(createTimestampAutoUpdateTrigger('guest_reservations'))
}

exports.down = async (knex, Promise) => {
  return knex.schema
    .dropTableIfExists('guest_reservations')
    .dropTableIfExists('guests')
    .dropTableIfExists('reservations')
    .raw(DROP_UPDATE_MODIFIED_COLUMN_FUNCTION)
}
