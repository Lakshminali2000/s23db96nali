const mongoose = require("mongoose")
const fruitSchema = mongoose.Schema({
NAME:{
    type: String,
}, 
COLOR:{
    type: String,
    minlength:4,
    maxlength:10,
}, 
CALORIES:{
    type: Number,
    minlength:1,
    maxlength:10,
}, 
})
module.exports = mongoose.model("fruit",fruitSchema)