import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecipeModelSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("RecipeModel", RecipeModelSchema);
