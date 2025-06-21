import axios from 'axios';

const API_KEY = '50500162-d9264b458cdacee071354b362';
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Searches for images using Pixabay API
 * @param {string} query - Search query
 * @returns {Promise} - Promise that resolves to the API response
 */
export function searchImages(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 21,
    min_width: 640,
    min_height: 480,
  };

  return axios.get(BASE_URL, { params: searchParams })
    .then(response => {
      const data = response.data;
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data;
    });
}
