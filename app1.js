var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.use('/signup',function(req,res){
    console.log('Welcome to sign up page');
    res.sendFile(__dirname+'/views/signup.html');
})

app.post('/check',function(req,res){
    var username=req.body.username;
    var rollnumber=req.body.rollnumber;
    var email=req.body.Email;
    var pwd=req.body.Password;
    var pwd2=req.body.password2;
    var radio=req.body.radio;
    console.log("data submitted");
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h3>Registration done Successfully</h3>");
    res.end();
})

app.use('/login',function(req,res){
    console.log('Welcome to login page');
    res.sendFile(__dirname+'/views/login.html');
})

app.post('/validate',function(req,res){
    var email=req.body.Email;
    var pwd=req.body.password;
    console.log("login done");
    res.send(`User name:${email},Password:${pwd}`);
})

app.listen(2000,()=>{
    console.log("server is running at the port 2000");
})