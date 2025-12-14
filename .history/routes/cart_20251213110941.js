import express from "express";
import { cartController } from "../controllers/cartController.js";

export const cartRouter = express.Router();
cartRouter.post("/add", cartController);
