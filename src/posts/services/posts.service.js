// model
const Post = require("../models/Post");
const User = require("../../users/models/User");

class PostsServices {
  async getPosts(req, res, next) {
    try {
      const posts = await Post.find({}).populate("user", {
        _id: 0,
        username: 1,
      });
      res.json(posts);
    } catch (err) {
      next(err);
    }
  }

  async getPost(req, res, next) {
    const { id } = req.params;

    try {
      const post = await Post.findById(id).populate("user", {
        _id: 0,
        username: 1,
      });
      res.json(post);
    } catch (err) {
      next(err);
    }
  }

  async createPost(req, res, next) {
    const { title, content, image, user } = req.body;

    try {
      const autor = await User.findById(user); // busca el autor del post
      const postCreated = new Post({
        title,
        content,
        image,
        user: autor._id,
      });
      await postCreated.save();
      autor.posts = autor.posts.concat(postCreated._id); // adiciona el post al usuario
      await autor.save();
      res.status(201).json(postCreated);
    } catch (err) {
      next(err);
    }
  }

  async updatePost(req, res, next) {
    const { body: data } = req;
    const { id } = req.params;

    try {
      const postUpdated = await Post.findByIdAndUpdate(id, data, {
        new: true,
      });
      await postUpdated.save();

      res.json(postUpdated);
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
