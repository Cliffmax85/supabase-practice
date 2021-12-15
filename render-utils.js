export function renderCar(car) {
    const div = document.createElement('div');
    const makeEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const modelEl = document.createElement('p');

    div.classList.add('car-item');

    if (car.color === car.color) {
        div.style.backgroundColor = car.color;
    } else (car.color !== car.color); 
    modelEl.style.backgroundColor = 'purple';

    if (car.model[0] === 'C') {
        div.style.transform = 'rotate(45deg)';
    }

    makeEl.textContent = car.make;
    colorEl.textContent = car.color;
    modelEl.textContent = car.model;
    div.append(makeEl, colorEl, modelEl);

    return div;

}

export function renderMovie(movie) {
    const div = document.createElement('div');
    const titleEl = document.createElement('p');
    const lengthEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const bestPictureEl = document.createElement('p');

    div.classList.add('movie-item');

    titleEl.textContent = 'title: ' + movie.title;
    lengthEl.textContent = 'length: ' + movie.length;
    genreEl.textContent = 'genre: ' + movie.genre;
    bestPictureEl.textContent = 'best picture: ' + movie.bestPicture;

    if (movie.bestPicture === 'yes') {
        div.style.backgroundColor = 'gold';
    } else if (movie.bestPicture === 'robbed') {
        div.style.backgroundColor = 'red';
    } else {
        div.style.backgroundColor = 'green';
    }

    div.append(titleEl, lengthEl, genreEl, bestPictureEl);
    return div;

}

export function renderBand(band) {
    const div = document.createElement('div');
    const bestSongEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const bestAlbumEl = document.createElement('p');
    const goodLiveEl = document.createElement('p');

    div.classList.add('band-item');

    bestAlbumEl.textContent = 'best album: ' + band.bestAlbum;
    bestSongEl.textContent = 'best song: ' + band.bestSong;
    nameEl.textContent = 'band name: ' + band.name;
    goodLiveEl.textContent = 'good live?: ' + band.goodLive;

    div.append(bestSongEl, bestAlbumEl, nameEl, goodLiveEl);

    return div;
}

export function renderBird(bird) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const cuteEl = document.createElement('p');
    const colorEl = document.createElement('p');

    div.classList.add('bird-item');

    nameEl.textContent = 'name: ' + bird.name;
    cuteEl.textContent = 'cute?: ' + bird.cute;
    colorEl.textContent = 'color: ' + bird.color;

    div.append(nameEl, cuteEl, colorEl);

    return div;
}