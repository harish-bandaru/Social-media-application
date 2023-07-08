const express = require("express");
const Post = require('../models/post');
const router = express.Router();

router
.post('/create', async (req,res) => {
    try{
     const post = await Post.create(req.body.username, req.body.posttext);  
     res.send({...post});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })  
 .post('/fetch', async (req,res) => {
    try{
     const post = await Post.fetch(req.body.username);  
     res.send({...post});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })
.put('/updatePost', async (req,res) => {
    try{
     const post = await Post.updatePost(req.body.username, req.body.newText);  
     res.send({...post, password: undefined});
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })
 .delete('/deletePost', async (req,res) => {
    try{
     await Post.deletePost(req.body.id);  
     res.send({ success: "Account Deleted" });
    } catch(error){
      res.status(401).send({message: error.message});
    }
 })

 module.exports = router;