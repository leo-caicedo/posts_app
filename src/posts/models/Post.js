const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: String,
    image: String,
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
