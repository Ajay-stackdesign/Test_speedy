// var recipes = require('../recipes.json');
// var router = require('express').Router();

// module.exports = router;

const express = require("express")
const { createRecipes, getAllRecipes, getRecipes } = require("../controller/recipes")

const router = express.Router()

router.route("/recipes").post(createRecipes)
// router.route("/recipes/shopping-list/:id").get(getRecipes)
router.route("/recipes/shopping-list").get(getAllRecipes)

module.exports = router
