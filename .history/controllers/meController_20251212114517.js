import { meRotuer } from "../routes/me.js";
import { getDBConnection } from "../db/db.js";
export async function meController(req, res) {
  try {
    const db = await getDBConnection();
  } catch (err) {
    console.error("getCurrentUser error : ", err);
    res.status(500, json({ error: "Internal server error" }));
  }
}
