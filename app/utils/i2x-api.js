import axios from 'axios';

const BASE_URL = 'https://i2x-challenge.herokuapp.com';

export {getData, login};

function getData() {
  const token = sessionStorage.getItem('accessToken');
  const url = `${BASE_URL}/ai/recording/list/`;
  return axios({
    method:'get',
    url:url,
    headers: {'Authorization': `JWT ${token}`}
  })
    .then(function(response) {
      return response;
  });
}

function login(username, password) {
   return axios.post(`${BASE_URL}/core/login/`,{
     email: username,
     password
   })
  .then((result) => {
    return result;
  })
  .catch(() => {
    const result = {};
    result.error = "Username or password is incorrect";
    return result;
  })

  ;
}
