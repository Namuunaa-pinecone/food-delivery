import { Order } from "../model/index.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: "21500",
    user: "67468c80fbe3bbe523f9f3cc",
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
