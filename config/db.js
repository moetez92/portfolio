const mongoose = require("mongoose");
const config = require("../config/default.json")
const db= config.databaseUrl;

const connectDB = ()=>{
    mongoose.connect(db, { useUnifiedTopology: true ,useNewUrlParser: true}).then(()=>console.log(" DB connected"))
    .catch(err => console.log(err))
}

module.exports=connectDB;