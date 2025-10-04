const express = require('express');
const router = express.Router();
const courseController = require('../controllers/coursesController');

router.post('/', courseController.createCourse);
router.get('/', courseController.listCourses);

module.exports = router;
