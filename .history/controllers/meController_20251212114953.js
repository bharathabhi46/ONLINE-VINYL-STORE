import { getDBConnection } from "../db/db.js";
export async function meController(req, res) {
  try {
    const db = await getDBConnection();
    if (req.session.userId) {
      const userIdName = await db.get(
        "SELECT username FROM USERS WHERE lastId = ?",
        [req.session.userId]
      );
      res.status(200).json({
        isLoggedIn: true,
        name: userIdName,
      });
    } else {
      res.status(500).json({
        isLoggedIn: false,
      });
    }
  } catch (err) {
    console.error("getCurrentUser error : ", err);
    res.status(500, json({ error: "Internal server error" }));
  }
}
