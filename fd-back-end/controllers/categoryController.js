import { Category } from "../model/category.js";

const createCategory = async (request, response) => {
  const result = await Category.create({
    name: "2r hool"
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllCategories = async (request, response) => {
  const result = await Category.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createCategory, getAllCategories };
