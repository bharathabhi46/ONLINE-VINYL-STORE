import { getDBConnection } from "../db/db.js";
export async function meController(req, res) {
  try {
    const db = await getDBConnection();
    if (req.session.userId) {
      const userIdName = await db.get(
        "SELECT username FROM users WHERE lastId = ?",
        [req.session.userId]
      );
    }
  } catch (err) {
    console.error("getCurrentUser error : ", err);
    res.status(500, json({ error: "Internal server error" }));
  }
}
