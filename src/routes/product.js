import { Router } from "express";

const productRoute = Router();

productRoute.get("/", (req, res) => {
  res.send(`body: product get `);
});

productRoute.get("/:id", (req, res) => {
  res.send(`body: product get by id ${req.params.id} `);
});

productRoute.post("/", (req, res) => {
  if (req.body) res.send(`body: product post body `);
});

export default productRoute;
