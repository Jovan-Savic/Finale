const mongoose = require("mongoose");

const VozacSchema = new mongoose.Schema(
    {
        ime: 
        {
            type: String,
            trim: true,
            required: true,
        },
        prezime: 
        {
            type: String,
            trim: true,
            required: true,
        },
        mail: 
        {
            type: String,
            trim: true,
            required: true,
        },
        password: 
        {
            type: String,
            trim: true,
            required: true,
        },
        broj_telefona:
        {
            type: String,
            trim: true,
            required: true,
        },
        dostupan:
        {
            type: Boolean,
        },
        odobren:
        {
            type: Boolean,
        },
    });

module.exports = mongoose.model("Vozac", VozacSchema);