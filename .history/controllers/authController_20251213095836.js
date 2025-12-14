import validator from "validator";
import bcrypt from "bcryptjs";
import { getDBConnection } from "../db/db.js";
export async function authController(req, res) {
  let { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }
  name = name.trim();
  email = email.trim();
  username = username.trim();
  if (!/^[a-zA-Z0-9_-]{1,20}$/.test(username)) {
    return res.status(400).json({
      error:
        "Username must be 1–20 czharacters, using letters, numbers, _ or -.",
    });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid Email format." });
  }
  try {
    const db = await getDBConnection();
    const existing = await db.get(
      "SELECT id FROM USERS WHERE email = ? OR username = ?",
      [email],
      [username]
    );
    if (existing) {
      return res
        .status(400)
        .json({ error: "Registration failed. Please try again." });
    }

    const hashed = await bcrypt.hash(password, 10);
    const result = await db.run(
      "INSERT INTO users (name, email, username, password) VALUES(?,?,?,?)",
      [name, email, username, hashed]
    );
    console.log(result);
    req.session.userId = result.lastID;
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.error("Registration error:", err.message);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
}
export async function loginUser(req, res) {
  try {
    const db = await getDBConnection();
    const { username, password } = req.body;
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
}
