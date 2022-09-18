import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const imagTumbInGalery = document.querySelector('.gallery');
imagTumbInGalery.addEventListener('click', openOriginalImgAtClickPrev);
imagTumbInGalery.innerHTML = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="large-image.jpg"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join('');
}

function openOriginalImgAtClickPrev(evt) {
  evt.preventDefault();
  console.log(evt.currentTarget);
  const giveLinkToOriginalImg =
    evt.currentTarget.querySelector('.gallery__link');
  console.log(giveLinkToOriginalImg);
  console.log(evt.currentTarget.nodeName);
  console.log(evt.target.nodeName);

  //   if (evt.target.nodeName !== IMG) {
  //     return;
  //   }

  //   console.log(selectedImg);
}
