import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

const setParams = ({ q, page }) =>
  (axios.defaults.params = {
    q,
    page,
    key: '25271966-e84b12380dfdddc75d181e677',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

// https://pixabay.com/api/
// ?q = cat
// & page=1
// & key=your_key
// & image_type=photo
// & orientation=horizontal
// & per_page=12

export const Loader = (q, page = 1) => {
  setParams({ q, page });
  return axios
    .get('api/')
    .then(res => res.data.hits)
    .catch(err => {
      throw err;
    });
};
