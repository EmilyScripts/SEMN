const express = require("express");
const path = require("path");
const router = express.Router();
const home = require("./home");

const error = require("./error");

router.get("/", home.get);

module.exports = router;
