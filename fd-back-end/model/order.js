import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
