import axios from 'axios';
const getCityName = params => {
  return axios.get('/api/login/getCityName', params).then(res => res);
};
export { getCityName };
