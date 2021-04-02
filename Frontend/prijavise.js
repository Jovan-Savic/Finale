window.onload=function(){
const addButton = document.querySelector(".zasto");
console.log(addButton);
addButton.addEventListener("click", GetInputa);
async function GetInputa()
{
    let ime = document.querySelector(".ime");
    //ime=ime.Value;
//let ime=document.getElementById("ime");
console.log(ime);
}
}