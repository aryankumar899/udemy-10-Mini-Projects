let generateBtn=document.getElementById("generate-btn");

let numberEle=document.getElementById("number-generator");
generateBtn.addEventListener("click",()=>{
    let ranNo=Math.floor(Math.random()*100+1);
   numberEle.textContent=ranNo;
})

