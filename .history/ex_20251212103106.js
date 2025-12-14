import express from "express";
// import bcrypt from "bcryptjs";
// const pass = "skywalker96";
// const hashed = await bcrypt.hash(pass, 10); // cost factor tells algorithm how much work to do higher cost factor = high protection
// console.log(hashed);
// $2b$- alogrithm
// 10$- cost factor
// UxJQimjDc7zTxCgZPHUQCe6z0lUKM8sZNm9ekZXeMMX2sJDG/6/yq- hash + salt
const ud = {
  name: "f",
  pass: "$2b$10$qkVWWBqS25NG1ZZkr1JBQ.pbdFIX5UyxshXcGdiljyxfmNy0/9FiO",
};
const logInAttempt = {
  name: "g",
  pass: "skywalker96",
};
const uiV = await bcrypt.
const app = express();
app.listen(5000, () => {
  console.log("listening 5000");
});
