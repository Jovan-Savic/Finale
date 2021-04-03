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
var mymap = L.map('mapid').setView([44.8125, 20.4612], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1Ijoic3RlZmFuOTgiLCJhIjoiY2tuMWx6ZDR2MHhibDJvcGNxdnp3aHpzciJ9.Wp5qun3mr4nMQoWo4AQEyw'
}).addTo(mymap);

var marker = null;

function onMapClick(e) {

    if (marker == null) {
        marker = L.marker(e.latlng).addTo(mymap);
    }
    else {
        mymap.removeLayer(marker)
        marker = L.marker(e.latlng).addTo(mymap);
    }

}
mymap.on('click', onMapClick);
