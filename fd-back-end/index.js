import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { orderRouter, userRouter } from "./routes/index.js";
import { categoryRouter } from "./routes/categoryRouter.js";
import { foodRouter } from "./routes/foodRouter.js";

mongoose.connect(
  "mongodb+srv://bnamuuna0109:%40Pi56416@cluster0.ubm00.mongodb.net/"
);

const server = express();
const PORT = 4000;

server.use(cors());
server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);

server.listen(PORT, () => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});
``