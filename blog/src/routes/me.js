const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController.js');

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses)
router.get('/', meController.index);

module.exports = router;
