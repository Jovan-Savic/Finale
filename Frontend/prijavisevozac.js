window.onload=function(){
const addButton = document.querySelector(".zasto");
//console.log(addButton);
addButton.addEventListener("click", GetInputa);
async function GetInputa()
{
    let ime = document.querySelector(".ime");
    ime=ime.value;
    let a=document.querySelector(".ig");
    let pre = document.querySelector(".pre");
    pre=pre.value;
    let b=document.querySelector(".pg");
    let emel = document.querySelector(".emal");
    emel=emel.value;
    let c=document.querySelector(".mg");
    let pass = document.querySelector(".pass");
    pass=pass.value;
    let d=document.querySelector(".og");
    let passre = document.querySelector(".passre");
    passre=passre.value
    let k=document.querySelector(".parg");
    let bro = document.querySelector(".bro");
    t=document.querySelector(".bg");
bro=bro.value;

if(ime.length>2)
{
    a.innerHTML="";
if(pre.length>2)
{console.log(emel);
    b.innerHTML="";
if(emel.indexOf('@')>-1)
{
    c.innerHTML="";
if(pass.length>8)
{
    d.innerHTML="";
if(passre==pass)
{
k.innerHTML="";
axios.post('/use/vozac', 
    {
        ime:            ime,
        prezime:        pre,
        mail:           emel,
        password:       pass,
        broj_telefona:  bro,
        dostupan:       false,
        odobren:        false,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
})
localStorage.setItem('user',ime);
window.location='home.html';
}
else{
    k.innerHTML="nije ista sifra";
}
}
else{
    d.innerHTML="prekratka sifra";
}
}
else{
    c.innerHTML="nije dobar mejl";
}
}
else{
    b.innerHTML="nije dobro prezime";
}
}
else{
    a.innerHTML="prekratko ime";
}
}
}