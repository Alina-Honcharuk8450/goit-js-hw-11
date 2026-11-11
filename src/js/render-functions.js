import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <ul class="info">
          <li class="info-item">
            <p class="info-title">Likes</p>
            <p class="info-value">${image.likes}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Views</p>
            <p class="info-value">${image.views}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Comments</p>
            <p class="info-value">${image.comments}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Downloads</p>
            <p class="info-value">${image.downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}
