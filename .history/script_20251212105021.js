import express from "express";
import session from "express-session";
import { productsRouter } from "./routes/products.js";
import { authRouter } from "./routes/auth.js";
const app = express();
const PORT = 8000;
app.use(express.json()); // this middleware parses the incoming Json and put it in the req.body
app.use(
  session({
    secret: secret, //A private key used to protect the session cookie so nobody can fake it.
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: lax,
    },
  })
);
app.use(express.static("public"));
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("Failed to start server:", err);
  });
// When a request with JSON comes to your server, the body is raw text / bytes, like this:
// { "name": "Bharath", "age": 20 }
// Express cannot understand this raw body automatically.
// So without middleware, Express gives you:
// req.body  // undefined ❌
// Even though the actual HTTP body contains data, Express does not parse it into JavaScript.
// You cannot directly use it unless something converts it.
