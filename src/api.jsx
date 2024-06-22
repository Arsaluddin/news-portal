import axios from 'axios';

const API_KEY = '769d5b00f0ee4ba4a1ea3b01a509b203';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export const fetchArticles = async (query = 'india', page = 1) => {
  try {
    const response = await axios.get(`${CORS_PROXY}https://newsapi.org/v2/everything`, {
      params: {
        q: query,
        from: getYesterdayDate(),
        apiKey: API_KEY,
        page,
        pageSize: 10,
        language: 'en',
        sortBy: 'publishedAt',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const fetchArticleByUrl = async (url) => {
  try {
    const response = await axios.get(`${CORS_PROXY}${url}`, {
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

const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().split('T')[0];
};









