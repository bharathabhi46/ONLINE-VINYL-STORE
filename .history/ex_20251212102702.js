import express from "express";
import bcrypt from "bcryptjs";
const pass = "skywalker96";
const hashed = await bcrypt.hash(pass, 10); // cost factor tells algorithm how much work to do higher cost factor = high protection
console.log(hashed);
const app = express();
app.listen(5000, () => {
  console.log("listening 5000");
});
