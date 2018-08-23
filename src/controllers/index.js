const express = require("express");
const path = require("path");
const router = express.Router();
const home = require("./home");
const login = require("./login");
const error = require("./error");
const list = require("./list");

const dbQuery = require("./../model/quieries/queries.js")

router.get("/", home.get);
router.get("/login", login.get);
router.get("/list", list.get);

module.exports = router;
