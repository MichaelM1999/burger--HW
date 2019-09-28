const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data) {
        const burgerObj = {
          cats: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
      });
})
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
router.put("/api/cats/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});