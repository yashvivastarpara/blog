const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    blogs:Array,
});

const user = mongoose.model("User", userSchema);
module.exports= user;