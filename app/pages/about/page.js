console.log("hello world from about");

var template = require("./about.html");
var style = require("./about.scss");

module.exports = function() {
    return template;
};
