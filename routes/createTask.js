// console.log("inside routes/createTask");

const express = require('express');

const router = express.Router();

router.post('/create-task', require('../controllers/task_controller').createTask);

module.exports = router;
