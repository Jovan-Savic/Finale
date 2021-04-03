

function beograd(){

    var beograd = [];
    beograd.push([44.7995,20.5])
    beograd.push([44.7995,20.4750])
    beograd.push([44.83938173896593, 20.406409967753195])

    beograd.forEach(ele=>{
        L.marker(ele).addTo(mymap);
    })



}


var mymap = L.map('mappa').setView([44.8125, 20.4612], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1Ijoic3RlZmFuOTgiLCJhIjoiY2tuMWx6ZDR2MHhibDJvcGNxdnp3aHpzciJ9.Wp5qun3mr4nMQoWo4AQEyw'}).addTo(mymap);






function setMap(){
    mymap = L.map('mappa').setView([44.8125, 20.4612], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1Ijoic3RlZmFuOTgiLCJhIjoiY2tuMWx6ZDR2MHhibDJvcGNxdnp3aHpzciJ9.Wp5qun3mr4nMQoWo4AQEyw'}).addTo(mymap);


}




    /* var mymap = L.map('mapid').setView([44.8125, 20.4612], 13);
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
mymap.on('click', onMapClick); */