/*=============================================================================
File: 20240107002412_trackers.js. 
-------------------------------------------------------------------------------
Description: trackers database schema 
=============================================================================*/

// create tables 
exports.up = async knex => {

    // daily 
    await knex.schema.createTable('dailyTrackers', tbl => {
        // increment id by 1 from 0
        tbl.increments();
        tbl.text('type', 20).notNullable();
        tbl.text('name', 256).notNullable();
    })
}; 

// drop tables
exports.down = async knex => {
  
    await knex.schema.dropTableIfExists('dailyTrackers');
};
