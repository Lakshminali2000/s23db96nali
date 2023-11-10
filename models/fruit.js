const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
NAME: String,
COLOR: String,
CALORIES: Number
})
module.exports = mongoose.model("fruit",fruitSchema)