import { getDBConnection } from "../db/db.js";

export async function addToCart(req, res) {
  const db = await getDBConnection();
  const productId = parseInt(req.body.productId, 10);
  if (isNaN(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }
}
