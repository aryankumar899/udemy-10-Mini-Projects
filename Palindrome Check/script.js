

let input = document.getElementById("word");
let btn = document.getElementById("btn-check");
let popup = document.getElementById("display");

function isPalindrome(str) {
  // Remove any non-alphanumeric characters and convert the string to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(cleanStr)

  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');
  console.log(reversedStr)

  // Check if the original cleaned string is equal to the reversed string
  return cleanStr === reversedStr;
}

btn.addEventListener("click",function checker(){
    let num=input.value;
    // console.log(num)
    if(isNaN(num)){
      popup.innerHTML="Please Enter Some Word";
      popup.style.color="red";
  
    }
     if(isPalindrome(num)){
      popup.innerHTML=`"${num}" is  a Palindrome Number `;
      popup.style.color="green";
    }
    else{
      popup.innerHTML=`"${num}" is not a Palindrome Number `;
      popup.style.color="red";
    }
});
  



