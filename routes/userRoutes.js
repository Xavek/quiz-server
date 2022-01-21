const express = require("express");
const router = express.Router();
const { UserService } = require("../controllers/userController");
// Expect User Sign Up Page
// New User onboarding
/*
1. After user Data Comes first sanitize the data and validate again 
2. Generate A acess tokens and send back to user
3. Create the hash salt for user password and save to the db
4. Check for the If user Already exist
5. Write a controller function for generating a user-tokens and creating hash for pass

*/
router.post("/iqquiz/api/user/auth", (req, res) => {
  if (!req.body) {
    res.send({ msg: "Empty data sent" });
  } else {
    const { token, value } = UserService.createUser(req.body);
    const message = UserService.saveNewUser(value);
    res.send({ acessResponse: token, msg: message });
  }
  console.log(req.body);
});
// Login For Already Logged In User.
router.post("iqquiz/api/user/login", (req, res) => {
  if (!req.body) {
    res.send({ msg: "Empty data sent" });
  } else {
    res.send({ msg: "Your Request got accepted!" });
  }
  console.log(req.body);
});
module.exports = router;
