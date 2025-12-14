import express from "express";
import { cartController } from "../controllers/cartController.js";

const cartRouter = express.Router();
cartRouter.post("/add", cartController);
