// console.log('inside routes/index');

const express = require('express');

// The express.Router() method is used to create a new instance
// of the router object. Then, the router.get() method is used 
// to define a route for handling HTTP GET requests to the root 
// URL (/). This route is associated with the home method of 
// the homeController module.
// Finally, we export the router object using module.exports, so
// that it can be imported and mounted on an Express app object
// using the app.use() method.
const router = express.Router();

router.get('/' , require("../controllers/home_controller").home);

router.post('/create-task' , require('./createTask'));

router.post('/delete-task' , require('./deleteTask'));

module.exports = router;