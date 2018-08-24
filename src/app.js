// bring in requires
const express = require("express");
const exphbs = require("express-handlebars");
const compression = require("compression");
const path = require("path");
const controllers = require("./controllers/index");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// spin up our app
const app = express();

// set app options and handlebars
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
    "hbs",
    exphbs({
        extname: "hbs",
        layoutsDir: path.join(__dirname, "views", "layouts"),
        partialsDir: path.join(__dirname, "views", "partials"),
        defaultLayout: "main"
    })
);
app.use(
    session({
        key: "user_sid",
        secret: "somerandonstuffs",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000
        }
    })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(controllers);

// spin up :D
app.listen(app.get("port"), () => {
    console.log(`App running on port: ${app.get("port")}`);
});
