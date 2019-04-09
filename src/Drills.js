/* eslint-disable no-console */
'use strict';

require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});


function grabAllText(searchTerm){
    knexInstance
    .select('name')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

function grabAllText(searchTerm){
  knexInstance
  .select('name')
  .from('shopping_list')
  .where('name', 'ILIKE', `%${searchTerm}%`)
  .then(result => {
    console.log(result);
  });
}

function paginateProducts(pageNumber) {
  const productsPerPage = 6;
  const offset = productsPerPage * (pageNumber - 1);
  knexInstance
    .select('id', 'name', 'price', 'category')
    .from('shopping_list')
    .limit(pageNumber)
    .offset(offset)
    .then(result => {
      console.log(result);
    });
}

function getItemsAddedAfterDate(daysAgo) {
  knexInstance
  .select('id', 'name', 'price', 'category')
    .from('shopping_list')
    .where('date_added', '>', knexInstance.raw('now() - \'?? days\'::INTERVAL', daysAgo))
    .then(result => {
      console.log(result);
    });
}

 grabAllText('ea');
paginateProducts(5);
getItemsAddedAfterDate(3);