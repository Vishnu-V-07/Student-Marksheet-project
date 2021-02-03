const form=document.getElementById('form');
const username=document.getElementById('username');
const rollnumber=document.getElementById('rollnumber');
const date=document.getElementById('date');
const sub1=document.getElementById('sub1');
const sub2=document.getElementById('sub2');
const sub3=document.getElementById('sub3');


form.addEventListener('submit',(e) => {
    var c1=checkInputs();
    if(c1==1)
    {
       e.preventDefault()
    }
    
});

function checkInputs(){
     var c=0;
     const usernameValue=username.value.trim();
     const rollnumberValue=rollnumber.value.trim();
     const dateValue=date.value.trim();
     const sub1Value=sub1.value.trim();
     const sub2Value=sub2.value.trim();
     const sub3Value=sub3.value.trim();
     

    
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
     
     if(dateValue === '')
     {
         setErrorFor(date,'date cannot be blank');
         c=1;
     }
     else{
         setSuccessFor(date);
     }
     if(sub1Value === '')
     {
        setErrorFor(sub1,'subject 1 cannot be blank');
        c=1;
     }
     else if(!isSubject(sub1Value))
     {
        setErrorFor(sub1,'Subject Mark should  contain only numbers');
        c=1;
     }
     
     else{
        setSuccessFor(sub1);
     }
     if(sub2Value === '')
     {
        setErrorFor(sub2,'subject 2 cannot be blank');
        c=1;
     }
     else if(!isSubject2(sub2Value))
     {
        setErrorFor(sub2,'Subject Mark should  contain only numbers');
        c=1;
     }
     
     else{
        setSuccessFor(sub2);
     }
     if(sub3Value === '')
     {
        setErrorFor(sub3,'subject 3 cannot be blank');
        c=1;
     }
     else if(!isSubject3(sub3Value))
     {
        setErrorFor(sub3,'Subject Mark should  contain only numbers');
        c=1;
     }
     
     else{
        setSuccessFor(sub3);
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

function isUsername(username)
{
    return /^[A-Za-z0-9 ]+$/.test(username);
}
function isRollnumber(rollnumber)
{
    return /^[0-9 ]+$/.test(rollnumber);
}
function isSubject(sub1)
{
    return /^[0-9 ]+$/.test(sub1);
}
function isSubject2(sub2)
{
    return /^[0-9 ]+$/.test(sub2);
}
function isSubject3(sub3)
{
    return /^[0-9 ]+$/.test(sub3);
}


