// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryList = document.querySelector('.gallery');

const makeGallery = (event) => {

    const img = galleryItems.map((item) =>
        `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>`
    ).join('');

    galleryList.innerHTML = img;
};
makeGallery();

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});