//jshint esversion:6 
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")


const app = express();
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
// console.log(date);
app.get("/", (req, res) => {

    let day = date.getDate();


    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});
app.post("/", (request, response) => {

    let item = request.body.newItem;
    if (request.body.list === "Work") {
        workItems.push(item);
        response.redirect("/work");
    } else {
        items.push(item);
        response.redirect("/");
    }

});

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work",
        newListItems: workItems

    })
});


app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", (req, res) => {
    res.render('about')
})
app.listen(6969, () => {
    console.log("Server is working at posrt:6969");
});