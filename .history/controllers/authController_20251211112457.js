export function authController(req, res) {
  const postData = req.body;
  if (
    postData.name === "" ||
    postData.email === "" ||
    postData.email === "" ||
    postData.password === ""
  ) {
    return res.status(400).json({ error: "All the fields are required" });
  }
}
