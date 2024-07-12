let decrement = document.getElementById("dec");
let increment = document.getElementById("inc");
let display = document.getElementById("display_number");
let reset = document.getElementById("rst_btn")
let value = 0;
decrement.addEventListener("click",decrement_by_1);
increment.addEventListener("click",increment_by_1)
reset.addEventListener("click",reset_value)
function decrement_by_1(){
    if (value >0){
        value =value - 1;
        display.innerText=value;
    }
    else{
        alert("negetive value are not allowed")
    }
}
function increment_by_1(){
    if (value >= 10){
        alert("number not allowed greater then 10");
    }
    else{
    value = value + 1;
    display.innerText=value;
    }
}
function reset_value(){
    value = value-value;
    display.innerText=(value)
}
