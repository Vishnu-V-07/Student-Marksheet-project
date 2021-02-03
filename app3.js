var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var connection=require('./model/database.js');

app.set("views","./views")
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/signup',function(req,res){
    console.log("Welcome to signup page");
    res.render("signup");
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
            res.render('login');
            
        }
    })
})
app.get('/login',function(req,res){
    console.log("Welcome to login page");
    res.render('login');
})
app.post('/validate',function(req,res){
    console.log('validated');
    var email=req.body.Email;
    var pwd=req.body.password;
    
    connection.query('select email from signuppage where email like ?',[email],(err,results)=>{
        if(err) throw err;
        if(results){
            connection.query('select pwd from signuppage where email like ? and pwd like ?',[email,pwd],(err,results)=>{

                connection.query('select student_marks.*,signuppage.email from student_marks join signuppage on student_marks.rollnum=signuppage.rollnum where email like ? and pwd like ?',[email,pwd],(err,data)=>{
            
                
                    if(err) throw error;
                    if(data){
                
                        res.render("user",{userdata:data});
                        console.log(data);
                    }
                })
            
            })
        }
    })
    
    
})
app.get('/markentry',function(req,res){
    console.log("Welcome to markentry page");
    res.render("admin_MarkEntrySheet");
})
app.use('/entry',function(req,res){
    var username=req.body.username;
    var rollnumber=req.body.rollnumber;
    var mark1=req.body.mark1;
    var mark2=req.body.mark2;
    var mark3=req.body.mark3;
    

    connection.query('insert into student_marks values(?,?,?,?,?)',[rollnumber,username,mark1,mark2,mark3],(err,results)=>{
        console.log('this is query');
        if(err) throw err;
        if(results){
            console.log("Marks updated");
            res.render('admin_login');
            
        }
    })
})

app.listen(3003,()=> {
    console.log("Server is running at 3003");
})