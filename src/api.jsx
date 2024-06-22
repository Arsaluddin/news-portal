import axios from 'axios';

const API_KEY = '769d5b00f0ee4ba4a1ea3b01a509b203';
const BASE_URL = 'https://newsapi.org/v2/everything';

const getYesterdayDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().split('T')[0];
};

export const fetchArticles = async (query = 'india', category = '', page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: category ? `${query} AND ${category}` : query,
        from: getYesterdayDate(),
        apiKey: API_KEY,
        page,
        pageSize: 10,
        language: 'en',
        sortBy: 'publishedAt',
      },
      headers: {
        'X-Api-Key': API_KEY,
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
    const response = await axios.get(url, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};










