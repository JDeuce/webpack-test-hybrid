console.log("hello world from index");

var template = require("./index.html");
var style = require("./index.scss");

module.exports = function() {
    return template;
};
