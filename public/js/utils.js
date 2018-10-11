function get(url) {
    return fetch(url);
}

function getJSON(url) {
    return get(url).then((response) => response.json());
}

function addHeadingToDOM(title) {
    // get heading div
    const headingEl = document.querySelector('.heading');

    // create a h1 element and add title as text
    const h1El = document.createElement('h1');
    h1El.textContent = title;

    // append to DOM
    headingEl.appendChild(h1El);
}

function addTextToDOM(title, text) {

}
