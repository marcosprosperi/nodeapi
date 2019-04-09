import productRoute from "./product";

export default app => {
  app.use("/api/product", productRoute);
};
