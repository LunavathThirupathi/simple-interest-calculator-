///it is using function when the button clicked the button call with function name
// function simple(){

// var p=parseInt(document.getElementById('p').value);
// var r=parseInt(document.getElementById('r').value);
// var t=parseInt(document.getElementById('t').value);
// var interest =(p * r * t )/100;
// var tol_amount=p+interest;
// document.getElementById('para').innerHTML=p;
// document.getElementById('para1').innerHTML=interest;
// document.getElementById('para2').innerHTML=tol_amount;
// document.getElementById('he').innerHTML.style.border="1px solid"

// }

//it using id when the action perfoms by arrow function by evenlistener are activated and perform the action
cal =()=>{
    var p=parseInt(document.getElementById('p').value);
var r=parseInt(document.getElementById('r').value);
var t=parseInt(document.getElementById('t').value);
var interest =(p * r * t )/100;
var tol_amount=p+interest;
document.getElementById('para').innerHTML=p;
document.getElementById('para1').innerHTML=interest;
document.getElementById('para2').innerHTML=tol_amount;
document.getElementById('he').innerHTML.style.border="1px solid";
}
document.getElementById('btn').addEventListener('click',cal);
document.getElementById('load').addEventListener('load',cal)


