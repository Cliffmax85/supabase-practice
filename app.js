// import functions and grab DOM elements
import { getCars, getMovies } from './fetch-utils.js';
import { renderCar, renderMovie } from './render-utils.js';
// let state
const carsListContainer = document.getElementById('cars-list-container');
const moviesListContainer = document.getElementById('movies-list-container');
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