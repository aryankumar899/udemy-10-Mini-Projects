function detectChar()
{
    const input=document.getElementById("character").value;
    if(input){
        const unicodeValue=input.charCodeAt(0);
        let result=`The unicode Value of ${input} is ${unicodeValue}`;
        document.getElementById("result").textContent=result;


    }else{
      document.getElementById("result").textContent='Please Enter a Character';  
    }

}