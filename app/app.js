var render = require('./render');
var $ = require('jquery');

$(document).on('click a[data-page]', function(e) {
    e.preventDefault();
    var pageName = $(e.target).attr('data-page');
    window.history.pushState({}, pageName, pageName + '.html');
    renderPage(pageName);
});

function renderPage(pageName) {
    var pageBundle = require('bundle!./pages/' + pageName + '/page');
    pageBundle(function(page) {
        render(page);
    });
}

window.onpopstate = function(e) {
    console.log(e);
    console.log("pop");
};
