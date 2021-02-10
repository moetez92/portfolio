const express = require('express');
const router = express.Router();
const Project = require("../models/Project")

//get all projects
router.get("/", async (req,res)=>{
   

   
})

// add a new project
router.post("/", async (req,res)=>{
    const {id,title,link}= req.body;
   const project = new Project({user:id,title,link});
   await project.save();

   res.send(project)
})

// edit a project
router.put("/:id",(req,res)=>{
    res.send("project")
})

// delete a project
router.delete("/:id",(req,res)=>{
    res.send("project")
})


module.exports=router;