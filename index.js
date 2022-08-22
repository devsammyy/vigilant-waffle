const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

const myLogger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(myLogger);
app.use(router);

app.use((req, res) => {
  console.log("error");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
