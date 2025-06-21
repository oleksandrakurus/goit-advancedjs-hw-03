// Import necessary modules
import { searchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  showErrorMessage,
  showSuccessMessage,
} from './js/render-functions.js';

// Import SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Get DOM elements
const searchForm = document.getElementById('search-form');
const searchInput = searchForm.querySelector('input[name="searchQuery"]');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

// Initialize SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Handle form submission
searchForm.addEventListener('submit', handleSearch);

/**
 * Handles the search form submission
 * @param {Event} event - Form submit event
 */
function handleSearch(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  // Validate input
  if (!query) {
    showErrorMessage('Please enter a search query!');
    return;
  }

  // Clear previous results
  clearGallery(gallery);

  // Show loader
  showLoader(loader);

  // Perform search
  searchImages(query)
    .then(data => {
      // Hide loader
      hideLoader(loader);

      // Render images
      renderImages(data.hits, gallery);

      // Refresh SimpleLightbox
      lightbox.refresh();

      // Show success message
      showSuccessMessage(`Found ${data.totalHits} images!`);

      // Clear the search input
      searchInput.value = '';
    })
    .catch(error => {
      // Hide loader
      hideLoader(loader);

      // Show error message
      if (error.message === 'No images found') {
        showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
      } else {
        showErrorMessage('Something went wrong. Please try again later.');
        console.error('Search error:', error);
      }
    });
}
