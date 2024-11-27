import { User } from "../model/user.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Namuun",
    email: "bnamuuna0109@gmail.com",
    password: "1111",
    phoneNumber: 99104165,
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllUsers = async (request, response) => {
  const result = await User.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createUser, getAllUsers };
