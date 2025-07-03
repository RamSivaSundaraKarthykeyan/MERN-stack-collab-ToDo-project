import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MonogoDB", error);
    exit(1);
  }
};
