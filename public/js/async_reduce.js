(function () {
    getJSON('/animals').then((animals) => {
      addHeadingToDOM(animals.title);
  
      animals.animalURLs.reduce((acc, cur) => {
          return acc.then(() => {
            return getJSON(cur).then(addTextToDOM);
          });
      }, Promise.resolve());

    });
})();