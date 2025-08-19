const { MealRepo, FoodRepo } = require('../repositories/db');
const HttpError = require('../errors/HttpError');

exports.createMeal = async (userId, data) => {
  const foods = await Promise.all(data.foods.map(id => FoodRepo.findById(id)));
  if (foods.some(f => !f)) throw new HttpError(400, 'Um ou mais alimentos não foram encontrados');
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
  // populate foods and recompute totals from foods to ensure consistency
  return Promise.all(meals.map(async (m) => {
    const foods = await Promise.all((m.foods || []).map(id => FoodRepo.findById(id)));
    const totalCalories = foods.reduce((sum, f) => sum + (f?.calories || 0), 0);
    const totalProtein = foods.reduce((sum, f) => sum + (f?.protein || 0), 0);
    const totalCarbs = foods.reduce((sum, f) => sum + (f?.carbs || 0), 0);
    const totalFat = foods.reduce((sum, f) => sum + (f?.fat || 0), 0);
    return { id: m.id, user: m.user, date: m.date, foods, totalCalories, totalProtein, totalCarbs, totalFat };
  }));
};

exports.updateMeal = async (userId, id, data) => {
  const existing = await MealRepo.findById(id);
  if (!existing) throw new HttpError(404, 'Refeição não encontrada');
  if (existing.user !== userId) throw new HttpError(403, 'Acesso negado');
  const updated = await MealRepo.update(id, data);
  return updated;
};

exports.deleteMeal = async (userId, id) => {
  const existed = await MealRepo.findById(id);
  if (!existed) throw new HttpError(404, 'Refeição não encontrada');
  if (existed.user !== userId) throw new HttpError(403, 'Acesso negado');
  await MealRepo.delete(id);
};
