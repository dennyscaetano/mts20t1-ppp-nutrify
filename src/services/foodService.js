const { FoodRepo } = require('../repositories/db');

exports.createFood = async (data) => {
  const food = await FoodRepo.create(data);
  return food;
};

exports.getFoods = async () => {
  return FoodRepo.findAll();
};

exports.updateFood = async (id, data) => {
  return FoodRepo.update(id, data);
};

exports.deleteFood = async (id) => {
  await FoodRepo.delete(id);
};
