var mysql = require('mysql2');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root", // Original password: "root1234
            database: "islandfurniture-it07"
        });
        return conn;
    }
    //test
};
module.exports = dbconnect