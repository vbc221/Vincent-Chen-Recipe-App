const express=require('express')
const hbs=require('hbs')
const parser=require('body-parser');
const methodOverride=require('method-override');

const app=express()

app.set("view engine", "hbs");
app.use('/assets', express.static('assets'));

app.use(parser.urlencoded({
  extended: true
}));
app.use(methodOverride("_method"));

const RecipeController=require('./controllers/recipes')
app.use('/',RecipeController);

app.listen(3000,()=>{
  console.log('running on port 3000');
});