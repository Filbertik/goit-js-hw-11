export function renderGallery(images) {
  const arts = document.getElementById('gallery');

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <div class="gallery-item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
            </a>
            <div class="info">
                <p>❤️ ${likes}</p>
                <p>👁️ ${views}</p>
                <p>💬 ${comments}</p>
                <p>⬇️ ${downloads}</p>
            </div>
        </div>
    `
    )
    .join('');

  arts.innerHTML = markup;

  // lightbox.refresh();
  // edits 1
}
