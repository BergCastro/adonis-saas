'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', table => {
      table.increments()
      table.string('title').notNullable()
      table.timestamps()
      table
        .integer('team_id')
        .unsigned()
        .notNullable('teams')
        .references('id')
        .inTable()
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
