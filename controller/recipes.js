const Recipes = require("../model/recipedModels")
const ApiFeature = require("../utils/apiFeature")

exports.createRecipes = async (req, res, next) => {

    try {
        const recipes = await Recipes.create(req.body);

        res.status(201).json({
            success: true,
            recipes,
        });
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipes.findById(req.params.id)

        if (!recipes) {
            return res.json(500).json("Recipes not found!")
        }

        res.status(200).json({
            success: true,
            recipes
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getAllRecipes = async (req, res, next) => {
    try {
        const apiFeature = new ApiFeature(Recipes.find(), req.query)
            .search()
        if (!apiFeature) {
            return res.status(500).json("Recipes not found")
        }
        let recipes = await apiFeature.query;

        if (!recipes) {
            return res.status(500).json("Recipes not found")
        }

        res.status(200).json({
            success: true,
            recipes,
        })
    } catch (error) {
        res.status(500).json(error)
    }
}