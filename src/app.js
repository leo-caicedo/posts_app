const express = require("express");

// required routes
const postsRoutes = require("./posts/routes/posts.routes");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());

  // routes
  app.use("/api/posts", postsRoutes);
  return app;
};

module.exports = createApp;
