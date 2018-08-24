const express = require("express");
const path = require("path");
const mime = require("mime-types");
// handle image uploads with multer
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "..", "public", "images"));
    },
    filename: (req, file, cb) => {
        const ext = mime.extension(file.mimetype);
        cb(null, `${req.body.user}-${Date.now()}.${ext}`);
    }
});
const upload = multer({ storage });

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
router.post("/signup", upload.single("profile"), signup.post);

module.exports = router;
