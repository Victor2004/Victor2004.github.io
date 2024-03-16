function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomGif() {
    var imgElement = document.createElement('img');
    imgElement.src = 'images/gif/' + getRandomInt(1, 6) + '.gif';
    imgElement.classList.add('img-fluid');
    document.querySelector('.main-photo').appendChild(imgElement);
}
