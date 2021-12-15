// import functions and grab DOM elements
import { getBands, getCars, getMovies, getBirds } from './fetch-utils.js';
import { renderBand, renderCar, renderMovie, renderBird } from './render-utils.js';
// let state
const carsListContainer = document.getElementById('cars-list-container');
const moviesListContainer = document.getElementById('movies-list-container');
const bandsListContainer = document.getElementById('bands-list-container');
const birdsListContainer = document.getElementById('birds-list-container');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
window.addEventListener('load', async() => {
    const cars = await getCars();

    for (let car of cars) {
        const carsEl = renderCar(car);
        carsListContainer.append(carsEl);
    }
});

window.addEventListener('load', async() => {
    const movies = await getMovies();

    for (let movie of movies) {
        const moviesEl = renderMovie(movie);
        moviesListContainer.append(moviesEl);
    }
});

window.addEventListener('load', async() => {
    const bands = await getBands();

    for (let band of bands) {
        const bandsEl = renderBand(band);
        bandsListContainer.append(bandsEl);
    }
});

window.addEventListener('load', async() => {
    const birds = await getBirds();

    for (let bird of birds) {
        const birdsEl = renderBird(bird);
        birdsListContainer.append(birdsEl);
    }
});