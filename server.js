/**
* HTTP Server
*/
var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(3000); 
