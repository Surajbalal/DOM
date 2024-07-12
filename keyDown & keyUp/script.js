
let FLAG = 0;
function show(){
    if (FLAG == 0){
       document.getElementById("display").innerHTML = document.getElementById("input").value;
    FLAG = 1;
    }
    if(FLAG == 1){
        document.getElementById("display").innerHTML = document.getElementById("input").value;
        FLAG = 0;
    }

}