import axios from 'axios';

const instance =  axios.create({
  baseURL: 'https://burger-builder-d79cf.firebaseio.com/'
});

export default instance;