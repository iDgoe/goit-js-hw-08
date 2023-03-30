// import { join } from 'simplelightbox';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');

const cardsMarkup = createCards(galleryItems);

function createCards(el) {
  return el
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
    })
    .join('');
}

paletteContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'buttom',
  captionDelay: 250,
});

console.dir(lightbox);
