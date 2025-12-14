import express from "express";
import { authController } from "../controllers/authController.js";
export const authRouter = express.Router();
authRouter.push("/register", authController);
