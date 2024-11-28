import { Food } from "../model/index.js";

const createFood = async (request, response) => {
  const result = await Food.create({
    Name: "Budaatai huurga",
    Image: "BD",
    Ingredient: "Budaa, mah, songino",
    Price: 30000,
    FoodCategory: "6747cdf2f901f68a952d862e",
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (request, response) => {
  const result = await Food.find().populate("FoodCategory");

  response.json({
    success: true,
    data: result,
  });
};

export { createFood, getAllFoods };
