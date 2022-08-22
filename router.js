const express = require("express");
const router = express.Router();
const data = require("./data/users");

router.get("/", (req, res) => {
  res.render("./index");
});

router.post("/submit", (req, res) => {
  const { text } = req.body;
  const answer = "4";
  if (text === answer) {
    res.render("./nextPage");
  }
  res.render("./error");
});

module.exports = router;
