const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: String,
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    versionKey: false,
  }
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.password;
  },
});

const User = model("User", userSchema);

module.exports = Users;
