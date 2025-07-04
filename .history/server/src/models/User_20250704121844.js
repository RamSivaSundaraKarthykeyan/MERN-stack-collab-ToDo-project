import mongoose from "mongoose";

// 1-Create a schema
// 2-Model based off of the schema

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    unique: true,
  },
});
