exports.get = (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.render("profile");
    } else {
        res.redirect("/login");
    }
};
