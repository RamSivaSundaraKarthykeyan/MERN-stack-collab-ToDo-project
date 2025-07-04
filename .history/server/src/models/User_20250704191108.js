import mongoose from "mongoose";

// 1-Create a schema
// 2-Model based off of the schema

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  emailId: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
