import express from "express";
import { createCategory, getAllCategories } from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getAllCategories);
categoryRouter.post("/categories", createCategory);

export { categoryRouter };
