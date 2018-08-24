const queries = require("../model/queries/queries");

exports.get = (req, res) => {
    queries.getFacster((err, result) => {
      const profiles = result.rows;
      res.render("profile", { profiles });
    });
};
