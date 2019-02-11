const _ = require('lodash')
const { forEachSeries } = require('p-iteration')

module.exports = async (root, args, context) => {
  const game = await context.prisma.createGame(
    {
      spaces: {
        create: _.times(78, (index) => ({
          index,
        })),
      },
      players: {
        create: args.players,
      }
    },
  )

  const createdSpaces = await context.prisma.game({
    id: game.id,
  }).spaces()

  const firstSpace = _.first(createdSpaces)

  const createdPlayers = await context.prisma.game({
    id: game.id,
  }).players()

  await forEachSeries(createdPlayers, ({ id }) => (
    context.prisma.updatePlayer({
      where: {
        id,
      },
      data: {
        space: {
          connect: {
            id: firstSpace.id,
          },
        },
      },
    })
  ))

  return game
}
