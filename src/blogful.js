'use strict';

require('dotenv').config();
const knex = require('./knex-instance');
const ArticlesService = require('./articles-service');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

console.log(ArticlesService.getAllArticles());