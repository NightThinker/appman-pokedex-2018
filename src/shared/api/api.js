import axios from 'axios'


export const onGetCards = () => {
  return axios.get(`http://localhost:3030/api/cards`);
}