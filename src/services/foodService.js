const { FoodRepo } = require('../repositories/db');
const HttpError = require('../errors/HttpError');

exports.createFood = async (data) => {
  const food = await FoodRepo.create(data);
  return food;
};

exports.getFoods = async () => {
  return FoodRepo.findAll();
};

exports.updateFood = async (id, data) => {
  const updated = await FoodRepo.update(id, data);
  if (!updated) throw new HttpError(404, 'Alimento não encontrado');
  return updated;
};

exports.deleteFood = async (id) => {
  const existed = await FoodRepo.findById(id);
  if (!existed) throw new HttpError(404, 'Alimento não encontrado');
  await FoodRepo.delete(id);
};
