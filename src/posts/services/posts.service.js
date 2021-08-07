// model
const Post = require("../models/Post");

class PostsServices {
  async getPosts(req, res, next) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      next(err);
    }
  }

  async getPost(req, res, next) {
    const { id } = req.params;

    try {
      const post = await Post.findById(id);
      res.json(post);
    } catch (err) {
      next(err);
    }
  }

  async createPost(req, res, next) {
    const { body: data } = req;

    try {
      const createdPost = new Post(data);

      await createdPost.save();
      res.status(201).json(createdPost);
    } catch (err) {
      next(err);
    }
  }

  async updatePost(req, res, next) {
    const { body: data } = req;
    const { id } = req.params;

    try {
      const updatedPost = await Post.findByIdAndUpdate(id, data, {
        new: true,
      });
      await updatedPost.save();

      res.json(updatedPost);
    } catch (err) {
      next(err);
    }
  }

  async deletePost(req, res, next) {
    const { id } = req.params;

    try {
      await Post.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PostsServices;
