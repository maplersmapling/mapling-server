/*=============================================================================
File: index.js of mapling-server
-------------------------------------------------------------------------------
Description: home input to server 
=============================================================================*/

const server = require('./api/tracker.js');

// declare hostname and port route
const HOST = 'localhost'; 
const PORT = 4000; 

//start server
server.listen(PORT, () => console.log(`Server running at ${HOST}${PORT}`));

