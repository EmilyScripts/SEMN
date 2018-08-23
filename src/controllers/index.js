const express = require("express");
const path = require("path");
const router = express.Router();
const home = require("./home");
const login = require("./login");
const error = require("./error");
const profile = require("./profile");
const signup = require('./signup');
const signupPost = require('./signup-post');

router.get("/", home.get);
router.get("/login", login.get);
router.get("/profile", profile.get);
router.get('/signup', signup.get);
router.post('/signup', signupPost.post);

module.exports = router;
