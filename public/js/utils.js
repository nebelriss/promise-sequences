function get(url) {
    return fetch(url);
}

function getJSON(url) {
    return get(url).then((response) => response.json());
}
