var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 8080;


var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// import routes so that server has access to them
var routes = require("./controllers/burger_controller.js")

app.use("/", routes);

app.listen(port, function () {
    console.log("App listening on PORT: http://localhost:" + port);
})