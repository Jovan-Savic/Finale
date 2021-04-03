const mongoose = require("mongoose");

const StariSchema = new mongoose.Schema(
    {
        ime: 
        {
            type: String,
            trim: true,
            required: true
        },
        prezime:
        {
            type: String,
            trim: true,
            required: true
        },
        broj_telefona:
        {
            type: String,
            required: true
        },
        geografska_sirina:
        {
            type: Number,
            required: true
        },
        geografska_visina:
        {
            type: Number,
            required: true
        },
        adresa:
        {
            type: String,
            required: true
        },
        dostavljam: 
        {
            type: Boolean
        },
        isporuceno:
        {
            type: Boolean
        }
    });

module.exports = mongoose.model("Stari", StariSchema);