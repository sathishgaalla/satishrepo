var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'sa123',
    database : 'Brandz',
    port:'3306'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;