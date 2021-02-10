const mongoose = require("mongoose");
const Project = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    title:{
        type: String,
        required:true
    },
   link:{
        type: String,
        required:true
    },
    cover:{
        type: String,
       
    },
   description:{
        type: String,
        
    },
    keywords:{
        type: String,
        
    }

})

module.exports=mongoose.model("project",Project)