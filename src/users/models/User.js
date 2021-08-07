const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

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

// ecnrypt password
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(6);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.validatePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

// delete password for response
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.password;
  },
});

const User = model("User", userSchema);

module.exports = User;
