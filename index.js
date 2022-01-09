const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// For cross origin resource policy
app.use(cors());
// parses the incoming json data.
app.use(express.json());
const data = [
  {
    id: 1,
    question: "Where is Kathmandu Located ?",
    answer1: "India",
    answer2: "Nepal",
    answer3: "China",
    answer4: "Pakistan",
  },
  {
    id: 2,
    question: "Which colour is SKY ?",
    answer1: "Blue",
    answer2: "Pink",
    answer3: "Cyan",
    answer4: "Greenish",
  },
  {
    id: 3,
    question: "Height of Mt.Everest ?",
    answer1: "8848m",
    answer2: "8848Km",
    answer3: "8884m",
    answer4: "8884Km",
  },
  {
    id: 4,
    question: "Who am I, Acc to Biology ?",
    answer1: "Animal",
    answer2: "Party Animal",
    answer3: "Mundane Animal",
    answer4: "Social Animal",
  },
];

app.get("/api/questions", (req, res) => {
  res.send({ data });
});
app.post("/api/questions/answer", (req, res) => {
  if (!req.body.ansArray[1]) {
    res.send({ msg: "Empty data sent" });
  } else {
    res.send({ msg: "Your Request got accepted!" });
  }
  console.log(req.body);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running");
});
