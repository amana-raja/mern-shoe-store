import express from "express";
import { getCategory, postCategory } from "../controllers/category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/category", postCategory);
categoryRouter.get("/category", getCategory);
