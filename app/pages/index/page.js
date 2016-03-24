console.log('hello world from index');
require('./index.scss');

let template = require('./index.html');

module.exports = function() {
    return template;
};
