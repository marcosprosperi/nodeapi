import { Router } from "express";
import User from "../models/user";

const userRoute = Router();

userRoute.post("/", (req, res) => {
  if (req.body) {
    User.create(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(400);
      });
  }
});

export default userRoute;
