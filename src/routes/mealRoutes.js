const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { create: mealCreateValidator } = require('../validators/mealValidators');

router.post('/', auth, mealCreateValidator, validate, mealController.createMeal);
router.get('/', auth, mealController.getMeals);
router.put('/:id', auth, mealController.updateMeal);
router.delete('/:id', auth, mealController.deleteMeal);

module.exports = router;
