import express from "express";
import { authController, loginUser } from "../controllers/authController.js";
export const authRouter = express.Router();
authRouter.post("/register", authController);
authRouter.post("/login", loginUser);
