var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var connection=require('./model/database.js');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.set("views","./views")
app.set("view engine","ejs");

var route=require('./controller/Routes/route');
app.use(route);

app.listen(3003,()=> {
    console.log("Server is running at 3003");
})