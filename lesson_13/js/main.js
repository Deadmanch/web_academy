import {createMediaCard} from './mediaCard.js';

fetch('https://boring-fe.herokuapp.com/movies')
.then ((response) => {
    return response.json();
})
.then((movies) => {
    const main = document.querySelector('.main-page');
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid', 'products');

    for (let moviesObject of movies) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('products__item', 'col-4', 'col-sm-6');
        createMediaCard(gridItem, moviesObject);
        gridContainer.append(gridItem);
    }
    main.append(gridContainer);
})