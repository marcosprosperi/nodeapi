import express from "express";
import bodyParser from "body-parser";

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/", function(req, res) {
  if (req.body) {
    res.send(`body: ${req.body.name} `);
  }
});

app.listen(3000);
