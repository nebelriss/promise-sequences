const express = require('express');

const app = express()
const port = 8080;

const animals = {
    "title": "Just some animals...",
    "animalURLs": [
        "json/tiger.json",
        "json/elephant.json",
        "json/penguin.json",
        "json/polarbear.json",
        "json/fox.json"
    ]
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