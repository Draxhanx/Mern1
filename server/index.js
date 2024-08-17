import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import cors from "cors"

const app = express(); 
app.use(express.json());
app.use(cors())

app.use("/api/products", productRoutes )
 
const port = process.env.PORT || 5000;

app.listen(port, () => {
  connectDB();
  console.log("server is running on " + port);
});
