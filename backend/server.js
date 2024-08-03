import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { configDotenv } from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
configDotenv();

const object = {
  name: "John",
  surname: "Smith",
  age: 20,
};

app.get("/home", (req, res) => {
  res.status(200).json(object);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listed on port ${port}`);
});
