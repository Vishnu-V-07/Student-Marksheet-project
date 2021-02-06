var express=require('express');
var app=express();
var router=express.Router();
var connection=require('../../model/database.js');

connection.connect((err)=> {
    if(err) throw err;
    console.log('Connection Successfull');
})



router.get('/signup',function(req,res){
    console.log("Welcome to signup page");
    res.render("signup");
})
router.use('/check',function(req,res){
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
router.get('/login',function(req,res){
    console.log("Welcome to login page");
    res.render('login');
})
router.post('/validate',function(req,res){
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
router.get('/markentry',function(req,res){
    console.log("Welcome to markentry page");
    res.render("admin_MarkEntrySheet");
})
router.use('/entry',function(req,res){
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
router.get('/dashboard',function(req,res){
    console.log("Welcome");
    res.render("Dashboard");
})

module.exports=router;