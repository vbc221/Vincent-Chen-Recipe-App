const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipe");

router.delete("/:id", (req, res) => {
  Recipe.findOneAndDelete({
    _id: req.params.id
  }).then(() => {
    res.redirect("/");
  });
});

router.post("/", (req, res) => {
  Recipe.create(req.body).then(recipe => {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
  Recipe.findOneAndUpdate({
    _id: req.params.id
  }, req.body).then(recipe => {
    res.redirect("/");
  });
});

router.get("/", (req, res) => {
  Recipe.find({})
    .then(recipes => {
      res.render("index", {
        recipes
      });
    })
    .catch(err => console.error(err));
});

router.get("/edit/:id", (req, res) => {
  Recipe.findOne({
    _id: req.params.id
  }).then(recipe => {
    res.render("edit", recipe);
  });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/:id", (req, res) => {
  Recipe.findOne({
      _id: req.params.id
    })
    .then(recipe => {
      res.render("show", recipe);
    })
    .catch(err => console.error(err));
});

module.exports = router;
