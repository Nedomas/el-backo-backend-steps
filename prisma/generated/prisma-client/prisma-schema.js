module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGame {
  count: Int!
}

type AggregatePlayer {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Game {
  id: ID!
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player!]
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  players: PlayerCreateManyWithoutGameInput
}

input GameCreateOneWithoutPlayersInput {
  connect: GameWhereUniqueInput
}

type GameEdge {
  node: Game!
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GamePreviousValues {
  id: ID!
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
  OR: [GameSubscriptionWhereInput!]
  NOT: [GameSubscriptionWhereInput!]
}

input GameUpdateInput {
  players: PlayerUpdateManyWithoutGameInput
}

input GameUpdateOneRequiredWithoutPlayersInput {
  connect: GameWhereUniqueInput
}

input GameWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  players_every: PlayerWhereInput
  players_some: PlayerWhereInput
  players_none: PlayerWhereInput
  AND: [GameWhereInput!]
  OR: [GameWhereInput!]
  NOT: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
  createPlayer(data: PlayerCreateInput!): Player!
  updatePlayer(data: PlayerUpdateInput!, where: PlayerWhereUniqueInput!): Player
  updateManyPlayers(data: PlayerUpdateManyMutationInput!, where: PlayerWhereInput): BatchPayload!
  upsertPlayer(where: PlayerWhereUniqueInput!, create: PlayerCreateInput!, update: PlayerUpdateInput!): Player!
  deletePlayer(where: PlayerWhereUniqueInput!): Player
  deleteManyPlayers(where: PlayerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Player {
  id: ID!
  name: String!
  game: Game!
}

type PlayerConnection {
  pageInfo: PageInfo!
  edges: [PlayerEdge]!
  aggregate: AggregatePlayer!
}

input PlayerCreateInput {
  name: String!
  game: GameCreateOneWithoutPlayersInput!
}

input PlayerCreateManyWithoutGameInput {
  create: [PlayerCreateWithoutGameInput!]
  connect: [PlayerWhereUniqueInput!]
}

input PlayerCreateWithoutGameInput {
  name: String!
}

type PlayerEdge {
  node: Player!
  cursor: String!
}

enum PlayerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlayerPreviousValues {
  id: ID!
  name: String!
}

input PlayerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [PlayerScalarWhereInput!]
  OR: [PlayerScalarWhereInput!]
  NOT: [PlayerScalarWhereInput!]
}

type PlayerSubscriptionPayload {
  mutation: MutationType!
  node: Player
  updatedFields: [String!]
  previousValues: PlayerPreviousValues
}

input PlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlayerWhereInput
  AND: [PlayerSubscriptionWhereInput!]
  OR: [PlayerSubscriptionWhereInput!]
  NOT: [PlayerSubscriptionWhereInput!]
}

input PlayerUpdateInput {
  name: String
  game: GameUpdateOneRequiredWithoutPlayersInput
}

input PlayerUpdateManyDataInput {
  name: String
}

input PlayerUpdateManyMutationInput {
  name: String
}

input PlayerUpdateManyWithoutGameInput {
  create: [PlayerCreateWithoutGameInput!]
  delete: [PlayerWhereUniqueInput!]
  connect: [PlayerWhereUniqueInput!]
  set: [PlayerWhereUniqueInput!]
  disconnect: [PlayerWhereUniqueInput!]
  update: [PlayerUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [PlayerUpsertWithWhereUniqueWithoutGameInput!]
  deleteMany: [PlayerScalarWhereInput!]
  updateMany: [PlayerUpdateManyWithWhereNestedInput!]
}

input PlayerUpdateManyWithWhereNestedInput {
  where: PlayerScalarWhereInput!
  data: PlayerUpdateManyDataInput!
}

input PlayerUpdateWithoutGameDataInput {
  name: String
}

input PlayerUpdateWithWhereUniqueWithoutGameInput {
  where: PlayerWhereUniqueInput!
  data: PlayerUpdateWithoutGameDataInput!
}

input PlayerUpsertWithWhereUniqueWithoutGameInput {
  where: PlayerWhereUniqueInput!
  update: PlayerUpdateWithoutGameDataInput!
  create: PlayerCreateWithoutGameInput!
}

input PlayerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  game: GameWhereInput
  AND: [PlayerWhereInput!]
  OR: [PlayerWhereInput!]
  NOT: [PlayerWhereInput!]
}

input PlayerWhereUniqueInput {
  id: ID
}

type Query {
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  player(where: PlayerWhereUniqueInput!): Player
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player]!
  playersConnection(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerConnection!
  node(id: ID!): Node
}

type Subscription {
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
}
`
      }
    