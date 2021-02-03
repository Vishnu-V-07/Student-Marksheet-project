const mysql=require('mysql');
const connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'reg',
    port:'3306'
});

module.exports=connect;
