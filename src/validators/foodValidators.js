const { body } = require('express-validator');

exports.create = [
  body('name').isString().notEmpty(),
  body('calories').isNumeric()
];
