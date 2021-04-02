const mongoose = require("mongoose");

const DogadjajSchema = new mongoose.Schema(
    {
        ime: 
        {
            type: String,
            trim: true,
            required: true
        },
        organizator:
        {
            type: String,
            required: true
        },
        kontakt: 
        {
            type: String,
            required: true
        },
        datum: 
        {
            type: Date,
            required: true
        },
        lokacija:
        {
            type: String,
            required: true
        },
        info:
        {
            type: String,
            required: true
        },
        ucesnici: 
        {
            type: [String],
        },

    });

module.exports = mongoose.model("Sport", DogadjajiSchema);