import { Category } from "../models/categoryModel.js";

//  POST CATEGORY
export const postCategory = async (req, res) => {
  const { name, description, image } = req.body;

  try {
    let postCategory = await Category.create({
      name,
      description,
      image,
    });

    res.send(postCategory);
  } catch (error) {
    res.send(error);
  }
};

// GET CATEGORY
export const getCategory = async (req, res) => {
  try {
    let findCategory = await Category.find();
    res.send(findCategory);
  } catch (error) {
    res.send(error);
  }
};
