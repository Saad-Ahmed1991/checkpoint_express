const express = require("express");
const app = express();
const port = 5000;

const timer = require("./middlewares/time");

//app.use(timer);
app.use(express.static("./pages"));

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/pages/home.html`);
});
app.get("/services", function (req, res) {
  res.sendFile(`${__dirname}/pages/services.html`);
});
app.get("/contact", function (req, res) {
  res.sendFile(`${__dirname}/pages/contact.html`);
});
app.listen(port, function () {
  console.log("server running on port: ", port);
});
