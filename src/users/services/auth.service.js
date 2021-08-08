const bcrypt = require("bcryptjs");

// models
const User = require("../models/User");

class AuthServices {
  async login(req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const correctPassword =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      response.status(401).json({
        error: "invalid credentials",
      });
    }
    res.json({
      message: `Welcomme ${user.username}`,
    });
  }
}

module.exports = AuthServices;
