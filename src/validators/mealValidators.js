const { body } = require('express-validator');

exports.create = [
  body('date').isISO8601().toDate().withMessage('Data inválida'),
  body('foods').isArray().withMessage('Foods deve ser um array').bail()
    .custom(arr => Array.isArray(arr) && arr.length > 0).withMessage('Foods deve ser um array não vazio')
];

exports.allowedFields = ['date', 'foods', 'totalCalories', 'totalProtein', 'totalCarbs', 'totalFat'];
