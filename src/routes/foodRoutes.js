const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { create: foodCreateValidator } = require('../validators/foodValidators');
const requireAdmin = require('../middlewares/requireAdmin');

router.post('/', auth, foodCreateValidator, validate, foodController.createFood);
router.get('/', auth, foodController.getFoods);
router.put('/:id', auth, requireAdmin, foodController.updateFood);
router.delete('/:id', auth, requireAdmin, foodController.deleteFood);

module.exports = router;
