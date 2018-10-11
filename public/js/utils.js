const fakeNetworkDelay = 1500;

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
    const h1 = document.createElement('h1');
    h1.textContent = title;

    // append to DOM
    headingEl.appendChild(h1);
}

function addTextToDOM(animal) {
    // get text-section div
    const textEl = document.querySelector('.text-section');

    // create h2 and add title
    const h2 = document.createElement('h2');
    h2.textContent = `${animal.position}. ${animal.name}`;

    // create p and add text
    const p = document.createElement('p');
    p.textContent = animal.text;

    // append both to text-section
    textEl.appendChild(h2);
    textEl.appendChild(p);
}
