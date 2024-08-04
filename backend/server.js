import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { configDotenv } from "dotenv";

import recipeRouter from "./routes/recipes.js";

const app = express();
app.use(cors());
app.use(express.json());
configDotenv();

const object = {
  name: "John",
  surname: "Smith",
  age: 20,
};

app.use("/recipes", recipeRouter);

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listed on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
