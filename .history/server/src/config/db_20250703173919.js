import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MonogoDB", error);
    exit(1);
  }
};
