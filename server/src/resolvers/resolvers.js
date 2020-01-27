const { prisma } = require('../generated/prisma-client');

module.exports = {
  Query: {
    getAllUsers: (parent, args, ctx, info) => {
      return prisma.users();
    }
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => {
      const { email, password, name } = args;
      return prisma.createUser({ email, password, name });
    }
  }
};
