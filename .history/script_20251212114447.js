import express from "express";
import session from "express-session";
import { productsRouter } from "./routes/products.js";
import { authRouter } from "./routes/auth.js";
import { meRotuer } from "./routes/me.js";
const app = express();
const PORT = 8000;
const secret = process.env.SPIRAL_SESSION_SECRET || "jellyfish-baskingshark"; // Use secret from .env; if it doesn’t exist, use "jellyfish-baskingshark" as default.
app.use(express.json()); // this middleware parses the incoming Json and put it in the req.body
app.use(
  session({
    // Settings for the cookie stored in the user’s browser.
    secret: secret, //A private key used to protect the session cookie so nobody can fake it.
    resave: false, //Don’t save the session again if nothing changed.
    saveUninitialized: false, // Don’t create an empty session until something is stored (like login info).
    cookie: {
      httpOnly: true, // JS in the browser cannot access the cookie ( safer )
      secure: false, // cookie can work on http (for development)
      sameSite: "lax", // helps prevent CSRF; cookie only sent on normal navigation, not cross-site weird requests
    },
  })
);
app.use(express.static("public"));
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("api/auth", meRotuer);
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
