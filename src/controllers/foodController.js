const FoodService = require('../services/foodService');

exports.createFood = async (req, res, next) => {
  try {
    const food = await FoodService.createFood(req.body);
    res.status(201).json(food);
  } catch (err) {
    next(err);
  }
};

exports.getFoods = async (req, res, next) => {
  try {
    const foods = await FoodService.getFoods();
    res.json(foods);
  } catch (err) {
    next(err);
  }
};

exports.updateFood = async (req, res, next) => {
  try {
    const food = await FoodService.updateFood(req.params.id, req.body);
    res.json(food);
  } catch (err) {
    next(err);
  }
};

exports.deleteFood = async (req, res, next) => {
  try {
    await FoodService.deleteFood(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
