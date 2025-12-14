export function authController(req, res) {
  const postData = req.body;
  if (
    postData.name === "" ||
    postData.email === "" ||
    postData.email === "" ||
    postData.password === ""
  ) {
    console.log("error : All fields are required");
  }
  postData.name = postData;
}
