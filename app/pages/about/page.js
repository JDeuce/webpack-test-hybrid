console.log('hello world from about');

require('./about.scss');
let _ = require('underscore');
let template = require('./about.html');

module.exports = function() {
    let uniqTest = _.uniq([1,5,4,4,5,2,1,1,3,2,2,3,4,1]);
    console.log(uniqTest);
    return template;
};
