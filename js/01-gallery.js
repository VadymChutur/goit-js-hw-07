import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagTumbInGalery = document.querySelector('.gallery');
imagTumbInGalery.innerHTML = createGalleryItemsMarkup(galleryItems);
imagTumbInGalery.addEventListener('click', openOriginalImgAtClickPrev);

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
  const giveLinkToOriginalImg = evt.target.parentNode;

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${giveLinkToOriginalImg.href}" width="800" height="600">
    `,
    {
      onShow: (instance) => {
        document.addEventListener('keydown', closeKeyDownKeyEsc);
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', closeKeyDownKeyEsc);
      },
    }
  );

  function closeKeyDownKeyEsc(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
  instance.show();
}
