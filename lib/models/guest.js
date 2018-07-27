const Humps = require('humps')
const Knex = require('../../knex')

const createGuest = async (obj, args, context, info) => {
  const { input } = args

  const [id] = await Knex('guests')
    .insert(Humps.decamelizeKeys(input))
    .returning('id')

  return {
    ...input,
    id
  }
}

const getGuestByEmail = async (obj, args, context, info) => {
  const { email } = args

  const guests = await Knex('guests')
    .select()
    .where({ email })

  if (!guests.length) return

  const guest = Humps.camelizeKeys(guests[0])

  const reservations = await Knex.raw(
    `
      SELECT r.*
      FROM reservations r
      INNER JOIN guest_reservations gr
      ON gr.reservation_id = r.id
      WHERE gr.guest_id = ?
    `,
    guest.id
  )

  guest.reservations = reservations.rows.map(r => Humps.camelizeKeys(r))

  return guest
}

module.exports = {
  createGuest,
  getGuestByEmail
}
