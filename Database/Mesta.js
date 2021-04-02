const mongoose = require("mongoose");

const MestaSchema = new mongoose.Schema(
    {
        opstina:
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
        idvozaca: 
        {
            type: [String]
        },
    });

module.exports = mongoose.model("Mesta", MestaSchema);