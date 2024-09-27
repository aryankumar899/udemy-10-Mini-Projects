const button=document.getElementById("btn");
const copy=document.getElementById("copy");
const passwordBox=document.getElementById("password");


const generatePassword=()=>{
       const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()[];'?><{}|+-";

       let password="";
       const lenghtofPassword=10;
       for(let i=0; i<lenghtofPassword;  i++){
          password+=chars.charAt(Math.floor(Math.random()* chars.length));
        //   console.log(password)
       }
       passwordBox.value=password;
};


button.addEventListener("click",generatePassword);

copy.addEventListener("click",()=>{
    const passwordCopy=passwordBox.value.trim();

    if(!passwordCopy){
        alert("No Password to copy!Please Generate a Password First.");
    }
    
        navigator.clipboard.writeText(passwordCopy)
        .then(()=>{
            alert("Passord Copied Successfully");
        })
    
})