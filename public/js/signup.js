const form=document.getElementById('form');
const username=document.getElementById('username');
const rollnumber=document.getElementById('rollnumber');
const email=document.getElementById('Email');
const password=document.getElementById('Password');
const password2=document.getElementById('password2');

form.addEventListener('submit',(e) => {
    var c1=checkInputs();
    var c2=ValidateForm(form);
    if(c1==1 || c2==1)
    {
       e.preventDefault()
    }
    
});
function ValidateForm(form){
   var d=0;
   if ( ( form.Gender[0].checked == false ) && ( form.Gender[1].checked == false  ) && ( form.Gender[2].checked == false  ))
   {
      
      document.getElementById("error").innerHTML  = "This is mandatory field"; 
      d=1;
     
   }
   return d;
   }
function checkInputs(){
     var c=0;
     const usernameValue=username.value.trim();
     const rollnumberValue=rollnumber.value.trim();
     const emailValue=email.value.trim();
     const passwordValue=password.value.trim();
     const password2Value=password2.value.trim();
     

    
     if(usernameValue === '')
     {
        setErrorFor(username,'Username cannot be blank');
        c=1;
        
     }
     else if(!isUsername(usernameValue))
     {
        setErrorFor(username,'Username should not contain Special characters');
        c=1;
     }
     else{
        setSuccessFor(username);
     }
     if(rollnumberValue === '')
     {
        setErrorFor(rollnumber,'roll number cannot be blank');
        c=1;
        
     }
     else if(!isRollnumber(rollnumberValue))
     {
        setErrorFor(rollnumber,'rollnumber should  contain only numbers');
        c=1;
     }
     else{
        setSuccessFor(rollnumber);
     }
     
     if(emailValue === '')
     {
         setErrorFor(email,'Email cannot be blank');
         c=1;
     }
     else if(!isEmail(emailValue))
     {
         setErrorFor(email,'Email is not valid');
         c=1;
     }
     else{
         setSuccessFor(email);
     }
     if(passwordValue === '')
     {
        setErrorFor(password,'password cannot be blank');
        c=1;
     }
     else if(!isPassword(passwordValue))
     {
        setErrorFor(password,'password should contain minimum 8 characters and maximum 12 characters');
        c=1;
     }
     else{
        setSuccessFor(password);
     }
     if(password2Value === '')
     {
        setErrorFor(password2,'password2 cannot be blank');
        c=1;
     }
     else if(password2Value !== passwordValue) {
          setErrorFor(password2,'Passwords does not match');
          c=1;
     }
     else{
        setSuccessFor(password2);
     }
     return c;
     

}
function setErrorFor(input, message)
{
    const formControl= input.parentElement;
    const small= formControl.querySelector('small');

    small.innerText=message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email)
{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}
function isUsername(username)
{
    return /^[A-Za-z0-9 ]+$/.test(username);
}
function isRollnumber(rollnumber)
{
    return /^[0-9 ]+$/.test(rollnumber);
}
function isPassword(password)
{
    return /^[A-Za-z0-9]\w{7,12}$/.test(password);
}