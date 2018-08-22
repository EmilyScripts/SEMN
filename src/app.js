const express = require('express');
const exphbs = require('express-handlebars');
const compression = require('compression');
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.engine(
    "hbs",
    exphbs({
        extname: "hbs",
        layoutDir: path.join(__dirname, "views", "layouts"),
        partialsDir: path.join(__dirname, "views", "partials"),
        defaultLayout: "main"
    })
);

app.use(compression());

app.listen(app.get('port'), () => {
    console.log(`App running on port: ${app.get('port')}`);
});

