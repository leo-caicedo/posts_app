const express = require("express");

// required routes
const postsRoutes = require("./posts/routes/posts.routes");
const usersRoutes = require("./users/routes/users.routes");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());

  // routes
  app.use("/api/posts", postsRoutes);
  app.use("/api/users", usersRoutes);
  return app;
};

module.exports = createApp;
