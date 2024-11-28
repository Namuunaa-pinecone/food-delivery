import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
  },
  Ingredient: {
    type: String,
  },
  Price: {
    type: Number,
    required: true,
  },
  FoodCategory: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
});

export const Food = mongoose.model("Food", foodSchema);
