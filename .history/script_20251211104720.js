import express from "express";
import { productsRouter } from "./routes/products.js";
import { authController } from "./controllers/authController.js";
const app = express();
const PORT = 8000;

app.use(express.static("public"));

app.use("/api/products", productsRouter);
app.use("/api/");
app
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("Failed to start server:", err);
  });
