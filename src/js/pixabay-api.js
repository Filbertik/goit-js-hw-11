import axios from 'axios';

const API_KEY = '48709944-704d63a27b5727393d509020c';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        q: query,
        safesearch: true,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error(
      ' Sorry, there are no images matching your search query. Please try again!',
      error
    );
    throw error;
  }
}
