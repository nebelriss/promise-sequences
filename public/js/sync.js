(function() {
    getJSON('/animals').then((animals) => {
        addHeadingToDOM(animals.title);

        animals.animalURLs.forEach((animal) => {
            getJSON(animal).then(addTextToDOM);
        });
    });
})();