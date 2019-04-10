import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: String,
    offer: {
      amount: Number,
      price: Number
    },
    image: String,
    available: Boolean
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
