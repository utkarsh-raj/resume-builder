var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("form");
});

app.post("/resume_build", function(req, res) {
	var body = req.body;
	console.log(body);
	res.render("index", {data: body});
});





app.listen(8080, function(req, res) {
    console.log("The Resume App has started!");
});