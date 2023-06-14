const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userID: String,
  posttext: String
})

const Post = mongoose.model("Post", postSchema);

async function create(userID, posttext) {
    const newPost = await Post.create({
      userID: userID,
      posttext: posttext

    });
  
    return newPost;
  }

//read
async function fetch(userID) {
    const post = await getPost(userID);
    if(!post) throw Error('post not found');
    return post;
  }

//update
async function updatePost(id, newText) {
    const post = await post.updateOne({"_id": id}, {$set: { posttext: newText}});
    return post;
  }

//Delete
async function deletePost(id) {
    await Post.deleteOne({"_id": id});
  };
  
// utility functions
async function getPost(userID) {
    return await Post.findOne({ "userID": userID});
  }
  
  // 5. export all functions we want to access in route files
  module.exports = {create, fetch, updatePost, deletePost, getPost};