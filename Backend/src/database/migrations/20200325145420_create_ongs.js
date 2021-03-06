
exports.up = function(knex) {
    return knex.schema
    .createTable('ongs', function (table) {
       table.string('id').primary();
       table.string('name', 55).notNullable();
       table.string('email', 55).notNullable();
       table.string('whatsapp', 15).notNullable();
       table.string('city', 55).notNullable();
       table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("ongs");
};
