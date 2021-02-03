const form=document.getElementById('form');
const email=document.getElementById('Email');
const password=document.getElementById('Password');

form.addEventListener('submit',(e) => {
    


    var c1=checkInputs();
    if(c1==1)
    {
       e.preventDefault();
    }
    
});

function checkInputs()
{
    var c=0;
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();


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
function isPassword(password)
{
    return /^[A-Za-z0-9]\w{7,12}$/.test(password);
}