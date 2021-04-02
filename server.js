const express = require("express");
const app = express();
const ConnectDatabase = require("./Database/Database");
const Dogadjaji =       require("./Database/Dogadjaji");
const Korisnici =       require("./Database/Korisnici");
const Pomoc     =       require("./Database/Pomoc");

const PORT = 3001;


app.listen(PORT, () =>{
console.log("pocelo");
});

ConnectDatabase();

app.use(express.json());


app.use(express.static("FrontEnd"));

app.get("/use/dogadjaji", async (req, res) => 
{
    try{
        const CelaTabela = await Dogadjaji.find();
        res.json({
            uspesno: true,
            poruka: CelaTabela,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });
    }
})
app.get("/use/korisnici", async (req, res) => 
{
    try{
        const CelaTabela = await Korisnici.find();
        res.json({
            uspesno: true,
            poruka: CelaTabela,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });
    }
})
app.get("/use/pomoc", async (req, res) => 
{
    try{
        const CelaTabela = await Pomoc.find();
        res.json({
            uspesno: true,
            poruka: CelaTabela,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });
    }
})
app.post("/use/dogadjaji", async (req, res) => 
{
    try{
        const noviDogadjaj = new Dogadjaji({
            ime:         req.body.ime,
            organizator: req.body.organizator,
            kontakt:     req.body.kontakt,
            datum:       req.body.datum,
            lokacija:    req.body.lokacija,
            info:        req.body.info,
        });

        const provera = await noviDogadjaj.save();
        res.json({
            uspesno: true,
            baza: provera,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });
    }
})
app.post("/use/korisnici", async (req, res) => 
{
    try{
        const noviKorisnik = new Korisnici({
            ime:         req.body.ime,
            prezime:     req.body.prezime,
            mail:        req.body.mail,
            password:    req.body.password,
            organizator: req.body.organizator,
            odobren:     req.body.odobren,
        });

        const provera = await noviKorisnik.save();
        res.json({
            uspesno: true,
            baza: provera,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });

    }
})
app.post("/use/pomoc", async (req, res) => 
{
    try{
        const noviPomoc = new Pomoc({
            informacije:   req.body.informacije,
            adresa:        req.body.adresa,
            broj_telefona: req.body.broj_telefona,
            ime:           req.body.ime,
            broj_ljudi:    req.body.broj_ljudi,
        });

        const provera = await noviPomoc.save();
        res.json({
            uspesno: true,
            baza: provera,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });

    }
})
