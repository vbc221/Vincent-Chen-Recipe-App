const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/recipe')

let mongoURI='if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/Vincent-Chen-Recipe-App";
}'
mongoose.Promise=Promise

module.exports=mongoose 