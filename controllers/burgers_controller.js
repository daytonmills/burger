const express = require("express");
const router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post("/", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;
