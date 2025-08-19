const { UserRepo } = require('../repositories/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (data) => {
  const existing = await UserRepo.findByEmail(data.email);
  if (existing) throw { status: 400, message: 'Email já cadastrado' };
  const hashed = await bcrypt.hash(data.password, 10);
  const user = await UserRepo.create({ name: data.name, email: data.email, password: hashed, calorieGoal: data.calorieGoal || 2000 });
  return { id: user.id, name: user.name, email: user.email };
};

exports.login = async ({ email, password }) => {
  const user = await UserRepo.findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw { status: 401, message: 'Credenciais inválidas' };
  }
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.getProfile = async (userId) => {
  const user = await UserRepo.findById(userId);
  if (!user) throw { status: 404, message: 'Usuário não encontrado' };
  return { id: user.id, name: user.name, email: user.email, calorieGoal: user.calorieGoal };
};
