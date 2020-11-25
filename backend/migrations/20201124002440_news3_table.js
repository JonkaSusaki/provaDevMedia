
exports.up = function(knex) {
  return knex.schema.createTable('news3', table => {
      table.increments('id').primary()
      table.string('title').notNull()
      table.integer('category_id').references('id').inTable('categories')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('news3')
};
