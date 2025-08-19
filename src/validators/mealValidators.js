const { body } = require('express-validator');

exports.create = [
  body('date').isISO8601().toDate(),
  body('foods').isArray().notEmpty()
];
