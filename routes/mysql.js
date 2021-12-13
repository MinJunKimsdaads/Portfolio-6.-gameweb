var express = require('express');
var router = express.Router();
var mysql =  require('mysql');

router.get('/', function(req,res,next){
    var connection = mysql.createConnection({
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : 'alswns123!',
        database: 'test'
    });
    var testQuery = "INSERT INTO `new_table` (`username`,`password`) VALUES ('test','test');";
    
    connection.query(testQuery, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
    
    testQuery = "SELECT * FROM new_table";
    
    connection.query(testQuery, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
 
 
connection.end();
});
module.exports = router;

// var express=require('express');
// var router=express.Router();
// var mysql_odbc=require('../db/db_conn')();
// var conn = mysql_odbc.init();
