import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagTumbInGalery = document.querySelector('.gallery');

imagTumbInGalery.innerHTML = createGalleryItemsMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link"
                href="${original}">
                <img class="gallery__image" src="${preview}" 
                alt="${description}" 
                title="${description}"/>
            </a>
        </li>`
    )
    .join('');
}
