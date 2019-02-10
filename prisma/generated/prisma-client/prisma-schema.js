module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGame {
  count: Int!
}

type AggregatePlayer {
  count: Int!
}

type AggregateSpace {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Game {
  id: ID!
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player!]
  spaces(where: SpaceWhereInput, orderBy: SpaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Space!]
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  players: PlayerCreateManyWithoutGameInput
  spaces: SpaceCreateManyWithoutGameInput
}

input GameCreateOneWithoutPlayersInput {
  create: GameCreateWithoutPlayersInput
  connect: GameWhereUniqueInput
}

input GameCreateOneWithoutSpacesInput {
  create: GameCreateWithoutSpacesInput
  connect: GameWhereUniqueInput
}

input GameCreateWithoutPlayersInput {
  spaces: SpaceCreateManyWithoutGameInput
}

input GameCreateWithoutSpacesInput {
  players: PlayerCreateManyWithoutGameInput
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
  spaces: SpaceUpdateManyWithoutGameInput
}

input GameUpdateOneRequiredWithoutPlayersInput {
  create: GameCreateWithoutPlayersInput
  update: GameUpdateWithoutPlayersDataInput
  upsert: GameUpsertWithoutPlayersInput
  connect: GameWhereUniqueInput
}

input GameUpdateOneRequiredWithoutSpacesInput {
  create: GameCreateWithoutSpacesInput
  update: GameUpdateWithoutSpacesDataInput
  upsert: GameUpsertWithoutSpacesInput
  connect: GameWhereUniqueInput
}

input GameUpdateWithoutPlayersDataInput {
  spaces: SpaceUpdateManyWithoutGameInput
}

input GameUpdateWithoutSpacesDataInput {
  players: PlayerUpdateManyWithoutGameInput
}

input GameUpsertWithoutPlayersInput {
  update: GameUpdateWithoutPlayersDataInput!
  create: GameCreateWithoutPlayersInput!
}

input GameUpsertWithoutSpacesInput {
  update: GameUpdateWithoutSpacesDataInput!
  create: GameCreateWithoutSpacesInput!
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
  spaces_every: SpaceWhereInput
  spaces_some: SpaceWhereInput
  spaces_none: SpaceWhereInput
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
  createSpace(data: SpaceCreateInput!): Space!
  updateSpace(data: SpaceUpdateInput!, where: SpaceWhereUniqueInput!): Space
  updateManySpaces(data: SpaceUpdateManyMutationInput!, where: SpaceWhereInput): BatchPayload!
  upsertSpace(where: SpaceWhereUniqueInput!, create: SpaceCreateInput!, update: SpaceUpdateInput!): Space!
  deleteSpace(where: SpaceWhereUniqueInput!): Space
  deleteManySpaces(where: SpaceWhereInput): BatchPayload!
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
  space: Space
}

type PlayerConnection {
  pageInfo: PageInfo!
  edges: [PlayerEdge]!
  aggregate: AggregatePlayer!
}

input PlayerCreateInput {
  name: String!
  game: GameCreateOneWithoutPlayersInput!
  space: SpaceCreateOneWithoutPlayersInput
}

input PlayerCreateManyWithoutGameInput {
  create: [PlayerCreateWithoutGameInput!]
  connect: [PlayerWhereUniqueInput!]
}

input PlayerCreateManyWithoutSpaceInput {
  create: [PlayerCreateWithoutSpaceInput!]
  connect: [PlayerWhereUniqueInput!]
}

input PlayerCreateWithoutGameInput {
  name: String!
  space: SpaceCreateOneWithoutPlayersInput
}

input PlayerCreateWithoutSpaceInput {
  name: String!
  game: GameCreateOneWithoutPlayersInput!
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
  space: SpaceUpdateOneWithoutPlayersInput
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

input PlayerUpdateManyWithoutSpaceInput {
  create: [PlayerCreateWithoutSpaceInput!]
  delete: [PlayerWhereUniqueInput!]
  connect: [PlayerWhereUniqueInput!]
  set: [PlayerWhereUniqueInput!]
  disconnect: [PlayerWhereUniqueInput!]
  update: [PlayerUpdateWithWhereUniqueWithoutSpaceInput!]
  upsert: [PlayerUpsertWithWhereUniqueWithoutSpaceInput!]
  deleteMany: [PlayerScalarWhereInput!]
  updateMany: [PlayerUpdateManyWithWhereNestedInput!]
}

input PlayerUpdateManyWithWhereNestedInput {
  where: PlayerScalarWhereInput!
  data: PlayerUpdateManyDataInput!
}

input PlayerUpdateWithoutGameDataInput {
  name: String
  space: SpaceUpdateOneWithoutPlayersInput
}

input PlayerUpdateWithoutSpaceDataInput {
  name: String
  game: GameUpdateOneRequiredWithoutPlayersInput
}

input PlayerUpdateWithWhereUniqueWithoutGameInput {
  where: PlayerWhereUniqueInput!
  data: PlayerUpdateWithoutGameDataInput!
}

input PlayerUpdateWithWhereUniqueWithoutSpaceInput {
  where: PlayerWhereUniqueInput!
  data: PlayerUpdateWithoutSpaceDataInput!
}

input PlayerUpsertWithWhereUniqueWithoutGameInput {
  where: PlayerWhereUniqueInput!
  update: PlayerUpdateWithoutGameDataInput!
  create: PlayerCreateWithoutGameInput!
}

input PlayerUpsertWithWhereUniqueWithoutSpaceInput {
  where: PlayerWhereUniqueInput!
  update: PlayerUpdateWithoutSpaceDataInput!
  create: PlayerCreateWithoutSpaceInput!
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
  space: SpaceWhereInput
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
  space(where: SpaceWhereUniqueInput!): Space
  spaces(where: SpaceWhereInput, orderBy: SpaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Space]!
  spacesConnection(where: SpaceWhereInput, orderBy: SpaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpaceConnection!
  node(id: ID!): Node
}

type Space {
  id: ID!
  index: Int!
  game: Game!
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player!]
}

type SpaceConnection {
  pageInfo: PageInfo!
  edges: [SpaceEdge]!
  aggregate: AggregateSpace!
}

input SpaceCreateInput {
  index: Int!
  game: GameCreateOneWithoutSpacesInput!
  players: PlayerCreateManyWithoutSpaceInput
}

input SpaceCreateManyWithoutGameInput {
  create: [SpaceCreateWithoutGameInput!]
  connect: [SpaceWhereUniqueInput!]
}

input SpaceCreateOneWithoutPlayersInput {
  create: SpaceCreateWithoutPlayersInput
  connect: SpaceWhereUniqueInput
}

input SpaceCreateWithoutGameInput {
  index: Int!
  players: PlayerCreateManyWithoutSpaceInput
}

input SpaceCreateWithoutPlayersInput {
  index: Int!
  game: GameCreateOneWithoutSpacesInput!
}

type SpaceEdge {
  node: Space!
  cursor: String!
}

enum SpaceOrderByInput {
  id_ASC
  id_DESC
  index_ASC
  index_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SpacePreviousValues {
  id: ID!
  index: Int!
}

input SpaceScalarWhereInput {
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
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  AND: [SpaceScalarWhereInput!]
  OR: [SpaceScalarWhereInput!]
  NOT: [SpaceScalarWhereInput!]
}

type SpaceSubscriptionPayload {
  mutation: MutationType!
  node: Space
  updatedFields: [String!]
  previousValues: SpacePreviousValues
}

input SpaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SpaceWhereInput
  AND: [SpaceSubscriptionWhereInput!]
  OR: [SpaceSubscriptionWhereInput!]
  NOT: [SpaceSubscriptionWhereInput!]
}

input SpaceUpdateInput {
  index: Int
  game: GameUpdateOneRequiredWithoutSpacesInput
  players: PlayerUpdateManyWithoutSpaceInput
}

input SpaceUpdateManyDataInput {
  index: Int
}

input SpaceUpdateManyMutationInput {
  index: Int
}

input SpaceUpdateManyWithoutGameInput {
  create: [SpaceCreateWithoutGameInput!]
  delete: [SpaceWhereUniqueInput!]
  connect: [SpaceWhereUniqueInput!]
  set: [SpaceWhereUniqueInput!]
  disconnect: [SpaceWhereUniqueInput!]
  update: [SpaceUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [SpaceUpsertWithWhereUniqueWithoutGameInput!]
  deleteMany: [SpaceScalarWhereInput!]
  updateMany: [SpaceUpdateManyWithWhereNestedInput!]
}

input SpaceUpdateManyWithWhereNestedInput {
  where: SpaceScalarWhereInput!
  data: SpaceUpdateManyDataInput!
}

input SpaceUpdateOneWithoutPlayersInput {
  create: SpaceCreateWithoutPlayersInput
  update: SpaceUpdateWithoutPlayersDataInput
  upsert: SpaceUpsertWithoutPlayersInput
  delete: Boolean
  disconnect: Boolean
  connect: SpaceWhereUniqueInput
}

input SpaceUpdateWithoutGameDataInput {
  index: Int
  players: PlayerUpdateManyWithoutSpaceInput
}

input SpaceUpdateWithoutPlayersDataInput {
  index: Int
  game: GameUpdateOneRequiredWithoutSpacesInput
}

input SpaceUpdateWithWhereUniqueWithoutGameInput {
  where: SpaceWhereUniqueInput!
  data: SpaceUpdateWithoutGameDataInput!
}

input SpaceUpsertWithoutPlayersInput {
  update: SpaceUpdateWithoutPlayersDataInput!
  create: SpaceCreateWithoutPlayersInput!
}

input SpaceUpsertWithWhereUniqueWithoutGameInput {
  where: SpaceWhereUniqueInput!
  update: SpaceUpdateWithoutGameDataInput!
  create: SpaceCreateWithoutGameInput!
}

input SpaceWhereInput {
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
  index: Int
  index_not: Int
  index_in: [Int!]
  index_not_in: [Int!]
  index_lt: Int
  index_lte: Int
  index_gt: Int
  index_gte: Int
  game: GameWhereInput
  players_every: PlayerWhereInput
  players_some: PlayerWhereInput
  players_none: PlayerWhereInput
  AND: [SpaceWhereInput!]
  OR: [SpaceWhereInput!]
  NOT: [SpaceWhereInput!]
}

input SpaceWhereUniqueInput {
  id: ID
}

type Subscription {
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
  space(where: SpaceSubscriptionWhereInput): SpaceSubscriptionPayload
}
`
      }
    