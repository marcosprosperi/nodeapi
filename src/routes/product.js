import { Router } from "express";
import Product from "../models/product";

const productRoute = Router();

productRoute.post("/", (req, res) => {
  if (req.body) {
    Product.create(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(400);
      });
  }
});

export default productRoute;
