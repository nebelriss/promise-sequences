const express = require('express');

const app = express()
const port = 8080;

const animals = {
    "title": "Just some animals...",
    "animalURLs": {
        "tiger": "json/tiger.json",
        "elephant": "json/elephant.json",
        "penguin": "json/penguin.json",
        "polarbear": "json/polarbear.json",
        "fox": "json/fox.json",
    }
}

// get animals
app.get('/animals', (req, res) => {
    res.send(animals);
});

// Static web page
app.use('/', express.static('public'));

// Serve static json files
app.use('/json', express.static('server/json'));

// run server on specific port
app.listen(port, () => console.log(`Server is running on port: ${port}.`));