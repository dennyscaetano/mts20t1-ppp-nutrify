const { body } = require('express-validator');

exports.register = [
  body('name').isString().notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
];

exports.login = [
  body('email').isEmail(),
  body('password').notEmpty()
];

exports.allowedFields = {
  register: ['name', 'email', 'password'],
  login: ['email', 'password']
};
