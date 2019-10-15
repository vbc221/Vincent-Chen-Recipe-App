const mongoose = require('../db/connections');

const RecipeSchema = new mongoose.Schema({
  title: String,
  name: String,
  description: String,
  ingredients: Array,
  steps: Array,
  }
)

const Recipe=mongoose.model('Recipe',RecipeSchema)

module.exports=Recipe;