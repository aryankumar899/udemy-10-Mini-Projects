const btnElement=document.body.querySelector('button');
const spanElement=document.body.querySelector('span')

btnElement.onclick=function(){
   const YourName=prompt("Please Enter Your Name");
   spanElement.textContent=YourName;
}