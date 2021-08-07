const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: String,
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
