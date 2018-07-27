const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const Guest = require('./models/Guest')

module.exports = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue (value) {
      return new Date(value)
    },
    serialize (value) {
      return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`
    },
    parseLiteral (ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value)
      }
      return null
    }
  }),
  Mutation: {
    createGuest: Guest.createGuest
  },
  Query: {
    Guest: Guest.getGuestByEmail
  }
}
