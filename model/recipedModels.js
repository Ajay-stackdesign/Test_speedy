const mongoose = require("mongoose")

const recipesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please Enter the name",
    },
    ingredients: [
        {
            quantity: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: false
            },
            Type: {
                type: String,
                required: false
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("Recipes", recipesSchema)