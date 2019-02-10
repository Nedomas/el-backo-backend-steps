const _ = require('lodash')

module.exports = (root, args, context) => {
  return context.prisma.createGame(
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
}
