document.addEventListener('DOMContentLoaded', function() {
    var currentURL = window.location.href;
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].href === currentURL) {
            links[i].style.backgroundColor = '#FFB6C1';
        }
    }
});




