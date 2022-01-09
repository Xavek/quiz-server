const express = require("express");

const router = express.Router();

// Route for Questions
// Only logged in user can request the questions
router.get("/api/questions", (req, res) => {});
// Route for submitting the answers
// only logged in user can send the answers
router.post("/api/questions/answer", (req, res) => {});

module.exports = router;
