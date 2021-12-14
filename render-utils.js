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

    div.append(titleEl, lengthEl, genreEl, bestPictureEl);
    return div;

}