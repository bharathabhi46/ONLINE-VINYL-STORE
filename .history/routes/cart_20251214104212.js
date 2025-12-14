import express from "express";
import {
  addToCart,
  getCartCount,
  getAll,
  deleteItem,
  deleteAll,
} from "../controllers/cartController.js";
import { requiredAuth } from "../middleware/requiredAuth.js";

export const cartRouter = express.Router();

cartRouter.post("/add", requiredAuth, addToCart);
cartRouter.get("/cart-count", requiredAuth, getCartCount);
cartRouter.get("/", requiredAuth, getAll);
cartRouter.delete("/all", requiredAuth, deleteAll);
cartRouter.delete("/:itemId", requiredAuth, deleteItem);
