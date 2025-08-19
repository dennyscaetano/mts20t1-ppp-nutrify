const { MealRepo, FoodRepo } = require('../repositories/db');

exports.createMeal = async (userId, data) => {
  const foods = await Promise.all(data.foods.map(id => FoodRepo.findById(id)));
  const totalCalories = foods.reduce((sum, f) => sum + (f?.calories || 0), 0);
  const totalProtein = foods.reduce((sum, f) => sum + (f?.protein || 0), 0);
  const totalCarbs = foods.reduce((sum, f) => sum + (f?.carbs || 0), 0);
  const totalFat = foods.reduce((sum, f) => sum + (f?.fat || 0), 0);
  const meal = await MealRepo.create({
    user: userId,
    date: data.date,
    foods: data.foods,
    totalCalories,
    totalProtein,
    totalCarbs,
    totalFat
  });
  return meal;
};

exports.getMeals = async (userId) => {
  const meals = await MealRepo.findByUserId(userId);
  // populate foods
  return Promise.all(meals.map(async m => ({ ...m, foods: await Promise.all((m.foods || []).map(id => FoodRepo.findById(id))) })));
};

exports.updateMeal = async (id, data) => {
  return MealRepo.update(id, data);
};

exports.deleteMeal = async (id) => {
  await MealRepo.delete(id);
};
