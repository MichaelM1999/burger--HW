const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });  
    },
    insertOne: function(name, newName, cb) {
        orm.insertOne("burgers",name, newName, function(res) {
          cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    }
}
module.exports = burger;

