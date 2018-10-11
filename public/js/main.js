(function() {
    getJSON('/animals').then((animals) => {
        addHeadingToDOM(animals.title);

        animals.animalURLs.forEach((animal) => {
            console.log(animal);
        });
    });
})();