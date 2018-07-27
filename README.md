# Apollo Server starter kit

Utilizes [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [HapiJS](https://hapijs.com/) and [KnexJS](https://knexjs.org/) on top of PostgreSQL.

## To get started

- `$ yarn global add knex` / `$ npm install -g knex`
- `$ psql -f bootstrap.sql`
- `$ knex migrate:latest`
- `$ knex seed:run`
- `$ yarn dev` / `$ npm run dev`
- `[http://localhost:3000/graphiql](http://localhost:3000/graphiql)`
- Try the following query:
  ```
  {
    Guest(email: "johnsmith@gmail.com") {
      firstName
      lastName
      reservations {
        arrivalDate
        departureDate
        guests
      }
    }
  }
  ```
- Try the following mutation:
  ```
  mutation {
    createGuest(input: {
      firstName: "Jane"
      lastName: "Doe"
      email: "janedoe@gmail.com"
    }) {
      id
    }
  }
  ```
- _Next steps_: Try creating a mutation to create a reservation for a given guest

## Other notes

- View documentation generated with Graphdoc at `[http://localhost:3000/doc](http://localhost:3000/doc)`
- Project also includes an example of a [custom scalar]().
