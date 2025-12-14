import { getDBConnection } from "../db/db.js";

export async function addToCart(req, res) {
  const db = await getDBConnection();
  const productId = req.body.productId;
}
