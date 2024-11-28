import { Order } from "../model/index.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: "21500",
    customer: "6747c165e486d0fffd7e911a",
    foodName: "6747d03d1562176d9ce1e73a",
    role: "active",
    createdDate: "2024/11/11",
    district: "Khan-Uul",
    khoroo: "11r khoroo",
    apartment: "564",
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("customer");

  response.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
