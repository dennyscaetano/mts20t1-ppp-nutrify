const MealService = require('../services/mealService');

exports.createMeal = async (req, res, next) => {
  try {
    const meal = await MealService.createMeal(req.userId, req.body);
    res.status(201).json(meal);
  } catch (err) {
    next(err);
  }
};

exports.getMeals = async (req, res, next) => {
  try {
    const meals = await MealService.getMeals(req.userId);
    res.json(meals);
  } catch (err) {
    next(err);
  }
};

exports.updateMeal = async (req, res, next) => {
  try {
    const meal = await MealService.updateMeal(req.params.id, req.body);
    res.json(meal);
  } catch (err) {
    next(err);
  }
};

exports.deleteMeal = async (req, res, next) => {
  try {
    await MealService.deleteMeal(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
