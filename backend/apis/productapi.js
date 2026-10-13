import express from "express";
import { getProduct, postProduct } from "../controllers/product.js";

export const productRouter = express.Router();

productRouter.post("/product", postProduct);
productRouter.get("/product", getProduct);
