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
        
        adresa:
        {
            type: String,
            required: true
        },
    });

module.exports = mongoose.model("Stari", StariSchema);