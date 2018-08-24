exports.get = (req, res) => {
    res.render("login");
};

const queries = require("../model/queries/queries");
const bcrypt = require("bcryptjs");

exports.post = (req, res) => {
    const { username, password } = req.body;
    queries.checkAuth(username, (err, result) => {
        const hashPassword = result;
        if (bcrypt.compareSync(password, hashPassword)) {
            req.session.user = JSON.stringify({ username, hashPassword });
            res.redirect("/profile");
        } else {
            console.log("Bad login");
            res.redirect("/home");
        }
    });
};
