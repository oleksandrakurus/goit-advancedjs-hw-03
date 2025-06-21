import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

/**
 * Creates HTML markup for a single image card
 * @param {Object} image - Image data from Pixabay API
 * @returns {string} - HTML string for the image card
 */
export function createImageCard(image) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
          loading="lazy"
        />
        <div class="info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${image.likes}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${image.views}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${image.comments}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${image.downloads}</span>
          </div>
        </div>
      </a>
    </li>
  `;
}

/**
 * Renders images to the gallery
 * @param {Array} images - Array of image objects from Pixabay API
 * @param {HTMLElement} galleryElement - Gallery container element
 */
export function renderImages(images, galleryElement) {
  const markup = images.map(createImageCard).join('');
  galleryElement.insertAdjacentHTML('beforeend', markup);
}

/**
 * Clears the gallery content
 * @param {HTMLElement} galleryElement - Gallery container element
 */
export function clearGallery(galleryElement) {
  galleryElement.innerHTML = '';
}

/**
 * Shows the loading indicator
 * @param {HTMLElement} loaderElement - Loader element
 */
export function showLoader(loaderElement) {
  loaderElement.style.display = 'flex';
}

/**
 * Hides the loading indicator
 * @param {HTMLElement} loaderElement - Loader element
 */
export function hideLoader(loaderElement) {
  loaderElement.style.display = 'none';
}

/**
 * Shows error message using iziToast
 * @param {string} message - Error message to display
 */
export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    timeout: 5000,
  });
}

/**
 * Shows success message using iziToast
 * @param {string} message - Success message to display
 */
export function showSuccessMessage(message) {
  iziToast.success({
    title: 'Success',
    message: message,
    position: 'topRight',
    timeout: 3000,
  });
}
