exports.get = (req, res) => {
    res.render("signup");
};

const queries = require("../model/queries/queries");
const bcrypt = require("bcryptjs");

exports.post = (req, res) => {
    var hashPassword = bcrypt.hashSync(req.body.password, 10);
    const postObj = {
        username: req.body.user,
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        bio: req.body.bio,
        cohort: req.body.cohort,
        picture: req.file.filename,
        github: req.body.github_handle,
        password: hashPassword
    };
    queries.postFacster(postObj, (err, response) => {
        if (err) {
            res.redirect("/signup");
        } else {
            res.redirect("/");
        }
    });
};

//{ user: 'martingaston',
//  firstname: 'Martin',
//  lastname: 'Gaston',
//  password: 'dog',
//  'confirm-password': 'dog',
//  'github-handle': 'martingaston',
//  bio: 'I like to do my homework the night before it\'s due in. ' }
