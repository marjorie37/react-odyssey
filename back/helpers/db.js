const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zappo',
    database: 'init'
});
module.exports = connection;