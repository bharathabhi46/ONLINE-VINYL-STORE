import express from "express";
import bcrypt from "bcryptjs";
const pass = "skywalker96";
const hashed = await bcrypt.hash(pass, 10);
const app = express();
app.listen(5000, () => {
  console.log("listening 5000");
});
