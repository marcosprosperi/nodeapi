import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    image: String,
    available: Boolean
  },
  {
    timestamps: true
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
