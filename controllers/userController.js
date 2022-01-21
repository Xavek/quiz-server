const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const User = require("../models/userSchema");
const schema = Joi.object({
  username: Joi.string().alphanum().min(4).max(8).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

class UserService {
  /*
1.req.body data comes from the direct request body 
2.Validate using JOI
3. Create userTokens with JWT and hash the password with bcrypt
4. Send back the tokens 
5. save the user to db.
  
  
*/
  static createUser(userDetails) {
    try {
      const { error, value } = schema.validate(userDetails);
      if (!error) {
        const token = jwt.sign({ data: value.username }, "ssh");
        return { token, value };
      } else {
        return error.message;
      }
    } catch (err) {
      console.log(err);
    }
  }
  static saveNewUser(userValue) {
    bcrypt.hash(userValue.password, 10, function (err, hash) {
      if (err) {
        console.log(err);
        return { message: err };
      } else {
        const newUser = new User({
          username: userValue.username,
          password: hash,
        });
        newUser
          .save()
          .then(() => console.log("User Saved"))
          .catch((err) => console.log("Error during user Saving"));
        return { message: "User Saved and return" };
      }
    });
  }
}
module.exports = { UserService };
