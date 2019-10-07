const mongoose = require('../db/connections');

const RecipeSchema = new mongoose.Schema({
  title: String,
  name: String,
  description: String,
  instructions: String,
  ingredients: String
})

const Recipe=mongoose.model('Recipe',RecipeSchema)

module.exports=Recipe;