import express from "express";
import bodyParser from "body-parser";
import configureRoute from "./routes";

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res) {
  if (req.body) {
    res.send(`body: ${req.body.name} `);
  }
});

configureRoute(app);

app.listen(3000);
