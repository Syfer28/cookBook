import recipeModel from "../models/recipeModel.js";

export const getRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createRecipe = async (req, res) => {
  const { title, time } = req.body;

  try {
    const recipe = await recipeModel.create({ title, time });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json(error);
  }
};
