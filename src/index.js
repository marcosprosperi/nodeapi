import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import configureRoute from "./routes";

dotenv.config();
const app = express();
const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

const CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true`;
mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true
});

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  if (req.body) {
    res.send(`body: ${req.body.name} `);
  }
});

configureRoute(app);

app.listen(3000);
