// model
const User = require("../models/User");

class UsersServices {
  async getUsers(req, res, next) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async getUser(req, res, next) {
    const { id } = req.params;

    try {
      const user = await User.findById(id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async createUser(req, res, next) {
    const { username, password, country, posts } = req.body;

    try {
      const createdUser = new User({
        username,
        password: await User.encryptPassword(password),
        country,
        posts,
      });

      await createdUser.save();
      res.status(201).json(createdUser);
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req, res, next) {
    const { body: data } = req;
    const { id } = req.params;

    try {
      const updatedUser = await User.findByIdAndUpdate(id, data, {
        new: true,
      });
      await updatedUser.save();

      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    const { id } = req.params;

    try {
      await User.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UsersServices;
