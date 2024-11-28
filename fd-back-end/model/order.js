import mongoose from "mongoose";

const roleEnum = {
  values: ["active", "progress", "waiting", "delivered"],
};

const orderSchema = mongoose.Schema({
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foodName: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Food",
    required: true,
  }],
  totalPrice: {
    type: String,
  },
  role: {
    type: String,
    enum: roleEnum,
    default: "order",
  },
  createdDate: {
    type: Date,
    required: true,
  },
  district: {
    type: String,
  },
  khoroo: {
    type: String,
  },
  apartment: {
    type: String,
  },
});

export const Order = mongoose.model("Order", orderSchema);
