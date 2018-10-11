(function() {
    getJSON('/animals').then((animals) => {
        addHeadingToDOM(animals.title);
    });
})();