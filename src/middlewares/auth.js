const jwt = require('jsonwebtoken');
const HttpError = require('../errors/HttpError');

module.exports = (req, _res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) throw new HttpError(401, 'Token não fornecido');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.userRole = decoded.role || 'user';
    next();
  } catch (err) {
    throw new HttpError(401, 'Token inválido');
  }
};
