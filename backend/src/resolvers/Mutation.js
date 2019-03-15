const Mutations = {
  async createItem(parent, args, ctx, info) {
    //ToDo check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: { ...args }
      },
      info
    );

    return item;
  },
  async updateItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    const updatedItem = await ctx.db.mutation.updateItem(
      {
        data: updates,
        where: { id: args.id }
      },
      info
    );
    return updatedItem;
  }
  async deleteItem(parent , args , ctx, info){
    const where = {id: args.id};
    // 1. find the item
    // 2. check if he own that Item or have the permission
    // 3. delete it
  }
};

module.exports = Mutations;
