module.exports = function(page) {
    document.getElementById('content').innerHTML = page();
};
