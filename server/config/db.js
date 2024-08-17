import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log(`Mongo URI: ${uri}`); // Debugging line

    await mongoose.connect(uri, {
     
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
