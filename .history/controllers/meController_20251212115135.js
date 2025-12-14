import { getDBConnection } from "../db/db.js";
export async function meController(req, res) {
  try {
    const db = await getDBConnection();
    if (!req.session.userId) {
      return res.json({
        isLoggedIn: false,
      });
    }
    const user = await db.get("SELECT name FROM users WHERE id = ?", [
      req.session.userId,
    ]);
    res.json({
      isLoggedIn: true,
      name: user,
    });
  } catch (err) {
    console.error("getCurrentUser error : ", err);
    res.status(500, json({ error: "Internal server error" }));
  }
}
