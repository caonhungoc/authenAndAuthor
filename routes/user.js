const express = require("express");

const router = express.Router();

const user_controller = require("./../controllers/user");

// POST request for create a user
router.post('/create', user_controller.user_create_post);


module.exports = router;