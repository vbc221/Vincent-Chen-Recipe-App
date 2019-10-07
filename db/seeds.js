const Recipe=('../models/recipe');
const seedData=require('./seeds.json');

Recipe.remove({})
  .then(()=>{
    return Recipe.collection.insert(seedData);
  })
  .then(()=>{
    process.exit();
  })