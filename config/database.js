const mongoose = require("mongoose")

const database = () => {
    mongoose.connect("mongodb://localhost:27017/nodespeedy", { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => {
            console.log("connected to databse")
        }).catch((err) => {
            console.log(err)
        })
}

module.exports = database