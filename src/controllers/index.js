const express = require("express");
const path = require("path");

const router = express.Router();
const home = require("./home");
const login = require("./login");
const error = require("./error");
const profile = require("./profile");
const signup = require("./signup");

router.get("/", home.get);
router.get("/login", login.get);
router.post("/login", login.post);
router.get("/profile", profile.get);
router.get("/signup", signup.get);
router.post("/signup", signup.post);

module.exports = router;
