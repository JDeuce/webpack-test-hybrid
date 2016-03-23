let render = require('./render');
let $ = require('jquery');

$(document).on('click', 'a[data-page]', function(e) {
    let pageName = $(e.target).attr('data-page');
    let state = { pageName };
    window.history.pushState(state, pageName, pageName + '.html');
    e.preventDefault();
    renderPage(pageName);
});

function renderPage(pageName) {
    let pageBundle = require('bundle!./pages/' + pageName + '/page');
    pageBundle(function(page) {
        render(page);
    });
}

window.onpopstate = function(e) {
    if (!e || !e.state || !e.state.pageName)
        return;
    let pageName = e.state.pageName;
    renderPage(pageName);
};
