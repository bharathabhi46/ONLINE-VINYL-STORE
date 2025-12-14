import express from "express";
import {
  authController,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";
import { logSignin } from "../middleware/loginSignIn.js";
export const authRouter = express.Router();
authRouter.post("/register", authController);
authRouter.post("/login", logSignin, loginUser);
authRouter.get("/logout", logoutUser);
