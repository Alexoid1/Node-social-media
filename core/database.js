const util = require('util');
const mysql = require('mysql');
//database conexion y configuracion
var database = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database:"auth_node"
});

database.getConnection(function(err, connection) {
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has to many connections');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused');
        }
    }

    if (connection) connection.release();
    console.log('DB is Connected');

    return;
    
});

database.query=util.promisify(database.query);
module.exports= database;