'use strict';

require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

// Drill 1
// Find items by name
function searchForTextType(searchTerm) {
  knexInstance
    .select('name')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(results => {
      console.log(results);
    });
}

// Drill 2
// Paginate results
function paginateResults(pageNumber) {
  const perPage = 10;
  const offset = perPage * (pageNumber - 1);

  knexInstance
    .select('*')
    .from('shopping_list')
    .limit(perPage)
    .offset(offset)
    .then(results => {
      console.log(results);
    });
}

// Drill 3
// Get all items added after date
function getAfterDate(daysAgo) {
  knexInstance
    .select('name', 'price', 'category', 'checked', 'date_added')
    .from('shopping_list')
    .where('date_added', '>', 
      knexInstance.raw('now() - \'?? days\'::INTERVAL', daysAgo))
    .then(results => {
      console.log(results);
    });
}