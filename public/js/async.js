(function () {
  getJSON('/animals').then((animals) => {
    addHeadingToDOM(animals.title);

    let sequence = Promise.resolve();

    animals.animalURLs.forEach((animal) => {
      sequence = sequence.then(() => {
        return getJSON(animal);
      }).then(addTextToDOM);
    });

    /*
    * Same as above but jetzt written out
    */
    // sequence = sequence.then(() => {
    //   return getJSON(animals.animalURLs[0]).then(addTextToDOM);
    // });
    // sequence = sequence.then(() => {
    //   return getJSON(animals.animalURLs[1]).then(addTextToDOM);
    // });
    // sequence = sequence.then(() => {
    //   return getJSON(animals.animalURLs[2]).then(addTextToDOM);
    // });
    // sequence = sequence.then(() => {
    //   return getJSON(animals.animalURLs[3]).then(addTextToDOM);
    // });
    // sequence = sequence.then(() => {
    //   return getJSON(animals.animalURLs[4]).then(addTextToDOM);
    // });

    /*
    * How the sequence looks like after the loop
    */
    // sequence.then(() => {
    //   return getJSON(animals.animalURLs[0]).then(addTextToDOM);
    // }).then(() => {
    //   return getJSON(animals.animalURLs[1]).then(addTextToDOM);
    // }).then(() => {
    //   return getJSON(animals.animalURLs[2]).then(addTextToDOM);
    // }).then(() => {
    //   return getJSON(animals.animalURLs[3]).then(addTextToDOM);
    // }).then(() => {
    //   return getJSON(animals.animalURLs[4]).then(addTextToDOM);
    // });

  });
})();