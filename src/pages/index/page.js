console.log('index code loaded');
require('./index.scss');

let template = require('./index.html');

module.exports = function() {
    return template;
};
