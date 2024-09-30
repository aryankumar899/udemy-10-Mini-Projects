const number = document.getElementById("number");
const btnElement = document.getElementById("btn");
const display = document.getElementById("write");
// function checker(){}
btnElement.addEventListener("click",function checker(){
    let num = parseInt(number.value.trim()); // Convert input to a number
    if (isNaN(num)) {
        display.style.color = "red";
        display.innerHTML = "Please enter a valid number";
        return;
    }
    if (valid(num)) {
        display.style.color = "green";
        display.innerHTML = `${num} is a Prime Number`;
    } else {
        display.style.color = "red";
        display.innerHTML = `${num} is not a Prime Number`;
    }
})



function valid(num) {
    if (num <= 1) return false; // Prime numbers are greater than 1
    for (let i = 2; i <= Math.sqrt(num); i++) { // Loop till the square root of the number
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
