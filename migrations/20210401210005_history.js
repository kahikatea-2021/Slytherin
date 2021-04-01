
exports.up = (knex) => {
  return knex.schema.createTable('history', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.text('message')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('history')
};
