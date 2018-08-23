const db = require("../../../database/db_connection");

const dbQuery = {
    // log in
    getFacster: (username, cb) => {
        let query = `SELECT * FROM users WHERE username = '${username}'`;
        db.query(query, (err, res) => {
            if (err) {
                cb("Error!", null);
            } else if (res.rowCount === 0) {
                cb(true, null);
            } else {
                cb(null, res);
            }
        });
    },

    // sign in
    postFacster: (user, cb) => {
        let query = `INSERT INTO users (username, first_name, last_name, bio, cohort, picture, github, password) VALUES ('${
            user.username
        }', '${user.first_name}', '${user.last_name}', '${user.bio}', '${
            user.cohort
        }', '${user.picture}', '${user.github}', '${user.password}')`;
        db.query(query, (err, res) => {
            if (err) {
                cb("Error!", null);
            } else if (res.rowCount === 1) {
                cb(null, res);
            }
        });
    },

    checkAuth: (user, cb) => {
        let query = `SELECT password FROM users WHERE username = '${user}'`;
        db.query(query, (err, res) => {
            if (err) {
                cb("Error!", null);
            } else {
                cb(null, res.rows[0].password);
            }
        });
    }
};

module.exports = dbQuery;
