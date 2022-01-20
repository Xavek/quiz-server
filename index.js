const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const userRoutes = require("./routes/userRoutes");
const leaderBoard = require("./routes/leaderboard");
dotenv.config();
// using helmet for web security
// For cross origin resource policy
app.use(cors());
app.use(helmet());
// parses the incoming json data.
app.use(express.json());
app.use("/userflow", userRoutes);
app.use("/leaderboard", leaderBoard);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running");
});
