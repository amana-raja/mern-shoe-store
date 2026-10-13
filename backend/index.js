import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import { categoryRouter } from "./apis/categoryapi.js";
import { connectDB } from "./config/connect.js";
import dns from "dns";
import { productRouter } from "./apis/productapi.js";

dns.setServers(["8.8.8.8"]);

// initilize express
const app = express();

app.use(cors());

// convert data into JSON
app.use(express.json());
app.use(express.urlencoded());

// connect to database
connectDB();

// connect api files
app.use("/", categoryRouter);
app.use("/", productRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is connected on port ${process.env.PORT.yellow}`);
});
