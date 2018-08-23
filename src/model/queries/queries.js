const db = require('./../../database/dbConnection');

const dbQuery = {
  // log in
  getFacster: function() {
    let query = 'SELECT * FROM users WHERE "username" = $1';
    db.query(query, (err, res) => {
      if (err) {
        cb("Error!", null);
      }
      cb(null, res);
    });
  },

  // sign in
  postFacster: function() {
    let query = 'INSERT INTO users (username, first_name, last_name, bio, cohort, picture, github, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    db.query(query, [username, first_name, last_name, bio, cohort, picture, github, password] (err, res) => {
      if (err) {
        cb("Error!", null);
      }
      cb(null, res);
    });
  },

  checkAuth: function() {
    let query = 'SELECT password FROM users WHERE "username" = $1';
    db.query(query, (err, res) => {
      if (err) {
        cb("Error!", null);
      }
      cb(null, res);
    });
  }

}

module.exports = dbQuery;
