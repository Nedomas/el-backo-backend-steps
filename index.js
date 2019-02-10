const { ApolloServer, gql } = require('apollo-server')
const { prisma } = require('./prisma/generated/prisma-client')

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Game {
    id: ID!
    players: [Player!]!
  }

  type Player {
    id: ID!
    name: String!
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
  },
  Game: {
    players(root, args, context) {
      return context.prisma.game({
        id: root.id
      }).players()
    },
  },
  Mutation: {
    createGame(root, args, context) {
      return context.prisma.createGame(
        {
          players: {
            create: args.players,
          }
        },

      )
    },
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
