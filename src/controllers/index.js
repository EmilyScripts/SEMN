const express = require("express");
const path = require("path");
const router = express.Router();
const home = require("./home");
const login = require("./login");
const error = require("./error");
const profile = require("./profile");
const signup = require("./signup");

const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect("/login");
    } else {
        next();
    }
};

router.get("/", sessionChecker, home.get);
router.get("/login", sessionChecker, login.get);
router.get("/profile", profile.get);
router.get("/signup", signup.get);
router.post("/signup", signup.post);

module.exports = router;
