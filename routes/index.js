const express = require('express');
const user_routes = require('./user.routes'); // Ensure this file exists and is correctly exported


const router = express.Router();

router.use('/', user_routes); // Prefix for user routes


module.exports = router;
