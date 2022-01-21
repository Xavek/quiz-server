const mongoose = require("mongoose");
// User Schema Which consist the user Information with default score of Zero
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", userSchema);
