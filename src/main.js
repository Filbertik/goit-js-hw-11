// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.getElementById('search-form');
const arts = document.getElementById('gallery');
const loader = document.getElementById('loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements['search-input'].value.trim();

  if (!query) {
    iziToast.error({
      title: '❌ Error',
      message: 'Type the request !',
      position: 'topRight',
    });
    return;
  }

  arts.innerHTML = '';
  loader.style.display = 'block'; // edits 1  Show loader

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      iziToast.warning({
        title: '❌ Attention',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    renderGallery(images);
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: '❌ Error',
      message: 'Can not load the images!',
      position: 'topRight',
    });
  } finally {
    loader.style.display = 'none'; // edits 1  Hide loader
  }
});
