import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Connect to the database before starting the server
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const __dirname = path.resolve();

app.use("/api/products", productRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
