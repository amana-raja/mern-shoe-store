import { Product } from "../models/productModel.js";

// POST PRODUCT
export const postProduct = async (req, res) => {
  // const { name, description, price, image, category } = req.body;

  try {
    let postProduct = await Product.insertMany(req.body);
    res.send(postProduct);
  } catch (error) {
    res.send(error);
  }
};

// GET PRODUCT

export const getProduct = async (req, res) => {
  try {
    let findProduct = await Product.find().populate("category");
    res.send(findProduct);
  } catch (error) {
    res.send(error);
  }
};
