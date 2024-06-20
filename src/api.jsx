import axios from 'axios';

const API_KEY = '769d5b00f0ee4ba4a1ea3b01a509b203';
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchArticles = async (query = 'tesla', from = '2024-05-20', sortBy = 'publishedAt', page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        from,
        sortBy,
        apiKey: API_KEY,
        page,
        pageSize: 10,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const fetchArticleByUrl = async (url) => {
  try {
    const response = await axios.get(url, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};


