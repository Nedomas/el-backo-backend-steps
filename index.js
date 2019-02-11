const { ApolloServer, gql } = require('apollo-server')
const { prisma } = require('./prisma/generated/prisma-client')
const createGame = require('./resolvers/Mutation/createGame')

const typeDefs = gql`
  type Query {
    hello: String
    game(id: ID!): Game!
  }

  type Game {
    id: ID!
    players: [Player!]!
    spaces: [Space!]!
  }

  type Space {
    id: ID!
    index: Int!
    players: [Player!]!
  }

  type Player {
    id: ID!
    name: String!
    space: Space!
  }

  type Mutation {
    createGame(players: [PlayerInput!]!): Game!
  }

  input PlayerInput {
    name: String!
  }
`

const resolvers = {
  Query: {
    hello: () => 'world',
    game(root, args, context) {
      return context.prisma.game(args)
    },
  },
  Player: {
    space(root, args, context) {
      return context.prisma.player({
        id: root.id
      }).space()
    },
  },
  Game: {
    players(root, args, context) {
      return context.prisma.game({
        id: root.id
      }).players()
    },
    spaces(root, args, context) {
      return context.prisma.game({
        id: root.id
      }).spaces()
    },
  },
  Mutation: {
    createGame,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
