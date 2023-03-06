import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description } = {}) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", cardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
