const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
fs = require("fs");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

// GET method route
app.get("/", function (req, res) {
  fs.readFile("ZonAnn.Ts+dSST.csv", function (err, data) {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
