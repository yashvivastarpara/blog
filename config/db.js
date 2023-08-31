const mongoose = require("mongoose");
require("dotenv").config()

const dbconfig = async()=>{
    await mongoose.connect(process.env.DB_url);
    console.log(("Connected to database "));
}

module.exports=dbconfig