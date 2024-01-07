/*=============================================================================
File: dbConfig.js of mapling-server
-------------------------------------------------------------------------------
Description: configures the database
=============================================================================*/
const knex = require('knex');

// import the configurations from knexfile.js
const config = require('../knexfile');

// declare the database
const db = knex(config.development); 

// export configured database
module.exports = db; 
