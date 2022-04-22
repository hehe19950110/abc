const axios = require('axios');

function getweather(city) {
  return new Promise((resolve,reject) => {
    axios.get(`https://api2.jirengu.com/getWeather.php?city=${encodeURI(city)}`)
    .then(response => {
      resolve(response.data)
    }).catch(e =>{
      reject('网络异常')
    })

  })

}

module.exports = getweather 