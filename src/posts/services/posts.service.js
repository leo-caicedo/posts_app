// models
const Post = require("../models/Post");

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

const getPost = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    res.json(post);
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  const { body: data } = req;

  try {
    const postCreated = new Post({ data });
    await postCreadted.save();
    res.status(201).json(postCreated);
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { body: data } = req;

  try {
    const postUpdated = await Post.updateOne({ id }, { data });
    res.json(postUpdated);
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Post.deleteOne({ id });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
