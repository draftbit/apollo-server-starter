exports.seed = async knex => {
  await knex('guest_reservations').del()
  await knex('guests').del()
  await knex('reservations').del()

  const [guestId] = await knex('guests')
    .insert({
      first_name: 'John',
      last_name: 'Smith',
      email: 'johnsmith@gmail.com'
    })
    .returning('id')

  const [reservationId] = await knex('reservations')
    .insert({
      arrival_date: '2018-10-01',
      departure_date: '2018-10-08',
      guests: 2
    })
    .returning('id')

  await knex('guest_reservations').insert({
    guest_id: guestId,
    reservation_id: reservationId
  })
}
