import express from "express";
import { } from "../controllers/userController.js";
import { createOrder, getAllOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", createOrder);

export { orderRouter };
