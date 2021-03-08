function createMediaCard (root, data) {
    console.log('HELLO!!!!', data);
    const container = document.createElement('div');
    container.classList.add('product-card');
    const content = `
    <div class="product-card__rating">${data.rating}</div>
    <div class="product-card__genre">${data.genre.toUpperCase()}</div>
        <img class="product-card__img" src="${data.preview}" alt="Poster" >
        <div class="product-card__bottom">
            <h2 class="product-card__title">${data.title}</h2>
            <span class="product-card_bottom__subtext">${data.description.substr(0, 100) + '...'}</span>
            <a href="#" class="product-card__bottom-link">Buy!</a>
            `;    
            container.innerHTML = content;
            root.append(container);   
}
export {createMediaCard};