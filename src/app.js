const express = require("express");

// required routes
const postsRoutes = require("./posts/routes/posts.routes");
const usersRoutes = require("./users/routes/users.routes");

// errorHandler
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require("./utils/middleware/errorHandlers");
const notFoundHandler = require("./utils/middleware/notFoundHandler");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());

  // routes
  app.use("/api/posts", postsRoutes);
  app.use("/api/users", usersRoutes);

  // catch 404
  app.use(notFoundHandler);

  // errors middleware
  app.use(logErrors);
  app.use(wrapErrors);
  app.use(errorHandler);

  return app;
};

module.exports = createApp;
