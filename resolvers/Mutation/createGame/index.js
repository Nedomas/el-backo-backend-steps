const _ = require('lodash')
const { forEachSeries } = require('p-iteration')

const PLAYER_COLORS = [
  '#3276EB',
  '#F9324C',
  '#2CA360',
  '#FBB813',
  '#AB6231',
  '#E051E5',
]

module.exports = async (root, args, context) => {
  const game = await context.prisma.createGame(
    {
      spaces: {
        create: _.times(78, (index) => ({
          index,
        })),
      },
      players: {
        create: _.map(args.players, (player, index) => ({
          ...player,
          color: PLAYER_COLORS[index],
        })),
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
