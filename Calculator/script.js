//this function clear all the values
function clearScreen(){
    document.getElementById("result").value=" ";
}

//this function display Values
function display(value){
    document.getElementById("result").value += value;
}

//this function evaluates the expression and returns result
function calculate(){
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value +="="+y;
}