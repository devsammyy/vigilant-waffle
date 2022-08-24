const express = require("express");
const router = express.Router();
const data = require("./data/users");
const captchagen = require("captchagen");

var captcha = captchagen.create();
captcha.generate();
captcha.uri(); // outputs png data-uri. works sync and async (cb is optional)
captcha.buffer(); // outputs png buffer. works sync and async (cb is optional)
captcha.buffer();

router.get("/", (req, res) => {
  res.render("./index");
});

router.get("/:name", (req, res, next) => {
  const passedParams = (arg) => {
    return data[arg]["Alias"];
  };
  try {
    if (passedParams(req.params.name)) {
      res.render("./page2");
    } else {
      console.log("Wrong answer, try again");
      res.redirect("/");
    }
  } catch (error) {}
  next();
});

router.get("/secret", (req, res, next) => {
  const passedParams = (arg) => {
    return data[arg]["Alias"];
  };
  try {
    if (passedParams(req.params.name)) {
      res.render("./page2");
    } else {
      console.log("You are the flag");
      res.end("only a member of sadsec can acess this page");
    }
  } catch (error) {}
  next();
});

router.post("/submit", (req, res, next) => {
  const { text } = req.body;
  const answer = "4";
  if (text === answer) {
    res.render("./page2");
  } else {
    console.log("Wrong answer, try again");
    res.redirect("/");
  }
  next();
});

router.post("/sadsec", (req, res) => {
  const { enter } = req.body;
  const answer = "You Are 1337";
  if (enter !== answer) {
    console.log("I guess you are missing the header");
    res.redirect("/");
  } else {
    res.render("./page3", { captcha });
  }
});

router.post("/sec", (req, res) => {
  const { sec } = req.body;
  const answer = captcha.text();
  if (sec === answer) {
    res.end("You are awesome");
  } else {
    console.log("Wrong answer, try again");
    res.redirect("./page3");
  }
});

module.exports = router;
