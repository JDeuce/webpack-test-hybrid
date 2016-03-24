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
        document.title = pageName;
        render(page);
    });
}

window.onpopstate = function(e) {
    if (!e || !e.state || !e.state.pageName)
        return;
    let pageName = e.state.pageName;
    renderPage(pageName);
};

// Set the initial page into the hTML5 history state object
// for back button to work at end of stack
let initial_page = document.title;
window.history.replaceState({ pageName: initial_page }, initial_page);
