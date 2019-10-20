const express=require('express')
const hbs=require('hbs')
const parser=require('body-parser');
const methodOverride=require('method-override');

const app=express()
const RecipeController=require('./controllers/recipes')


app.set("view engine", "hbs");
app.use('/assets', express.static('assets'));
app.use('/',RecipeController);
app.use(parser.urlencoded({
  extended: true
}));
app.use(methodOverride("_method"));







app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});