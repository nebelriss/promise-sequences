(function () {
    getJSON('/animals').then((animals) => {
      addHeadingToDOM(animals.title);
  
      animals.animalURLs.reduce((sequence, curURL) => {
          return sequence.then(() => {
            return getJSON(curURL).then(addTextToDOM);
          });
      }, Promise.resolve());

    });
})();