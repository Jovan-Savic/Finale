const mongoose = require("mongoose");

const MestaSchema = new mongoose.Schema(
    {
        naziv_grada:
        {
            type: String,
            trim: true,
            required: true
        },
        broj_telefona: 
        {
            type: String,
            trim: true,
            required: true
        },
        idvozaca:
        {
            type: [String]
        },
        idkorisnika:
        {
            type: [String]
        },
    });

module.exports = mongoose.model("Mesta", MestaSchema);