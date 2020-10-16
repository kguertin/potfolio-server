const express = require('express');
const router = express.Router()

const projectsController = require('../controllers/projects');

router.get('/resume', projectsController.getResume);

router.get('/getProjects', projectsController.getProjects)

router.post('/email', projectsController.postEmail);

module.exports = router;