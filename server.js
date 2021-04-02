const express = require("express");
const app = express();
const ConnectDatabase = require("./Database/Database");
const Stari           = require("./Database/Stari");
const Vozac           = require("./Database/Vozac");
const Mesta           = require("./Database/Pomoc");

const PORT = 3001;


app.listen(PORT, () =>{
console.log("pocelo");
});

ConnectDatabase();

app.use(express.json());


app.use(express.static("FrontEnd"));

app.get("/use/stari", async (req, res) => 
{
    try{
        const CelaTabela = await Stari.find();
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
app.get("/use/vozac", async (req, res) => 
{
    try{
        const CelaTabela = await Vozac.find();
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
app.get("/use/mesta", async (req, res) => 
{
    try{
        const CelaTabela = await Mesta.find();
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
app.post("/use/stari", async (req, res) => 
{
    try{
        const noviStari = new Stari({
            ime:            req.body.ime,
            prezime:        req.body.prezime,
            broj_telefona:  req.body.broj_telefona,
            adresa:         req.body.adresa,
        });

        const provera = await noviStari.save();
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
app.post("/use/vozac", async (req, res) => 
{
    try{
        const noviVozac = new Vozac({
            ime:            req.body.ime,
            prezime:        req.body.prezime,
            mail:           req.body.mail,
            password:       req.body.password,
            broj_telefona:  req.body.broj_telefona,
            dostupan:       req.body.dostupan,
            odobren:        req.body.odobren,
        });

        const provera = await noviVozac.save();
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
app.post("/use/mesta", async (req, res) => 
{
    try{
        const noviMesta = new Mesta({
            opstina:  req.body.opstina,
            idvozaca: req.body.idvozaca,
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
