const express = require("express");
const router = express.Router();

// Only LoggedIn user can request the scores.
router.get("/api/getscores", (req, res) => {});

module.exports = router;
