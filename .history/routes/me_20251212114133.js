import express from "express";
import { meController } from "../controllers/meController.js";
const meRotuer = express.Router();
meRotuer.get("/me", meController);
