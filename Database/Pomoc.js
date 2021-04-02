const mongoose = require("mongoose");

const PomocSchema = new mongoose.Schema(
    {
        informacije: 
        {
            type: String,
            required: true
        },
        adresa:
        {
            type: String,
            required: true
        },
        broj_telefona: 
        {
            type: String,
            trim: true,
            required: true
        },
        ime: 
        {
            type: String,
            trim: true,
            required: true
        },
        broj_ljudi:
        {
            type: Number,
            required: true
        },
    });

module.exports = mongoose.model("Pomoc", PomocSchema);