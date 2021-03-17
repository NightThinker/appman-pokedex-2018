import axios from 'axios'

export const onGetCards = () => {
  return axios.get(`http://localhost:3030/api/cards`, {
    params: {
      _limit: 20
    }
  });
}

export const onSearchCards = (search) => {
  console.log('search', search)
  // return axios.get(` http://localhost:3030/api/cards?limit=20&name=${search}&type=${search}`);
  return axios.get(`http://localhost:3030/api/cards?limit=30&name=picha&type=normal
`);
}