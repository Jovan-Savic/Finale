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
        mymap.removeLayer(marker);
        marker = L.marker(e.latlng).addTo(mymap);
    }
    
}
mymap.on('click', onMapClick);

window.onload=function(){
    const addButton = document.querySelector(".zasto");
    //console.log(addButton);
    addButton.addEventListener("click", GetInputa);
    async function GetInputa()
    {
        
        console.log(marker._latlng.lat);
        let ime = document.querySelector(".ime");
        ime=ime.value;
        let a=document.querySelector(".ig");
        let pre = document.querySelector(".pre");
        pre=pre.value;
        let b=document.querySelector(".pg");
        let bro = document.querySelector(".bro");
        t=document.querySelector(".bg");
    bro=bro.value;
    let adre = document.querySelector(".adr");
    
    console.log(adre);
        ad=document.querySelector(".na");
    adre=adre.value;
    console.log(adre);
    if(ime.length>2)
    {
        a.innerHTML="";
    if(pre.length>2)
    {
        b.innerHTML="";
    if(bro.length>9)
    {t.innerHTML="";
    if(adre.length>5)
    {
        ad.innerHTML="";
    //nisam bas siguran kako hoces da ti dam volonter i korisnik za sad je m da li je volonter i n da li je korisnik oma bool
        axios.post('/use/stari', 
        {
            ime:                ime,
            prezime:            pre,
            broj_telefona:      bro,
            geografska_sirina:  marker._latlng.lat,
            geografska_visina:  marker._latlng.lng,
            adresa:             adre,
            dostavljam:         false,
            isporuceno:         false
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    //ubacuje se u bazu
    }
    else
    {
        ad.innerHTML="nemate adresu";
    }
    }
    
    else 
    {
        t.innerHTML="los broj";
    }}
     
    else
    {
    b.innerHTML="Prezime je prekratko!";
    }
    }
    else
    {
    a.innerHTML="Ime je prekratko!";
    }
        //ime=ime.Value;
    //let ime=document.getElementById("ime");
    }
    }

