const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');
const courseController = require('../app/controllers/CourseController');


router.put('/:id/update', courseController.update)
router.get('/:id/edit', courseController.edit);
router.patch('/:id/restore', courseController.restore);

router.patch('/:id/remove', courseController.remove)
router.delete('/:id', courseController.delete)

router.post('/store', courseController.store)
router.get('/create', courseController.create)

router.get('/:slug', courseController.show);

router.get('/', coursesController.index);


module.exports = router;