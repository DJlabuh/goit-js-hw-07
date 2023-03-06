import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");
let modalInstance = null;

function createGalleryCardsMarkup(items) {
  return items
    .map(({ preview, original, description } = {}) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function handleGalleryClick(e) {
  e.preventDefault();
  const target = e.target;
  if (target.tagName === "IMG") {
    const imageURL = target.dataset.source;
    modalInstance = basicLightbox.create(`<img src="${imageURL}">`);
    modalInstance.show();

    document.addEventListener("keydown", handleModalEscape);
  }
}

function handleModalEscape(e) {
  if (e.key === "Escape") {
    modalInstance.close();
  }
}

function handleCloseModal() {
  document.removeEventListener("keydown", handleModalEscape);
}

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", cardsMarkup);

gallery.addEventListener("click", handleGalleryClick);

document.addEventListener("basiclightbox:close", handleCloseModal);
