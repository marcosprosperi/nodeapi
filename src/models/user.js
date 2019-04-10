import mongoose from "mongoose";

//user bcryp y passaport para implemntar login

const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: String
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;
