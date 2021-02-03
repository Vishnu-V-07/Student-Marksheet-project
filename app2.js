var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var connection=require('./model/database.js');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.get('/signup',function(req,res){
    console.log("Welcome to signup page");
    res.sendFile(__dirname+'/views/signup.html');
})
app.use('/check',function(req,res){
    console.log('validated');
    var username=req.body.username;
    var rollnumber=req.body.rollnumber;
    var email=req.body.Email;
    var pwd=req.body.Password;

    connection.query('insert into signuppage values(?,?,?,?)',[rollnumber,username,email,pwd],(err,results)=>{
        console.log('this is query');
        if(err) throw err;
        if(results){
            console.log("Values Inserted");
            app.use(express.static(__dirname));
            res.sendFile(__dirname+'/views/login.html');
            
        }
    })
})
app.get('/login',function(req,res){
    console.log("Welcome to login page");
    res.sendFile(__dirname+'/views/login.html');
})
app.post('/validate',function(req,res){
    console.log('validated');
    var email=req.body.Email;
    var pwd=req.body.password;
    
    connection.query('select email from signuppage where email like ?',[email],(err,results)=>{
        if(err) throw err;
        if(results){
            connection.query('select pwd from signuppage where email like ? and pwd like ?',[email,pwd],(err,results)=>{
            if(err) throw error;
            if(results){
            //if(data.email===email && data.pwd===pwd){
            res.send('<h3>Welcome..login Successfull</h3>');
            res.end();
            }
            // else{
            //     console.log('User account not found,Please Login again');
            //     res.sendFile(__dirname+'/views/login.html');
            // }
        //}
            })
        }
    })
    
    
})
app.listen(3003,()=> {
    console.log("Server is running at 3003");
})