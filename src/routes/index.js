import productRoute from "./product";
import userRoute from "./user";

export default app => {
  app.use("/api/product", productRoute);
  app.use("/api/user", userRoute);
};
