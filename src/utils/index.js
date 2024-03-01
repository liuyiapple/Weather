const axios = require('axios');

const getData = () => {
  const weekMap = {
    0: '星期日',
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
  };
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const week = weekMap[new Date().getDay()];
  return `今天是${year}年${month}月${day}日，${week}`;
};

const getWeather = () => {
  return new Promise((resolve, reject) => {
    axios
      // @ts-ignore
      .get('https://restapi.amap.com/v3/weather/weatherInfo', {
        params: {
          key: '7004f6d3a5948b43b1d8ca0515c95189',
          city: '310115',
          extensions: 'all',
          output: 'json',
        },
      })
      .then((res) => {
        if (res.data.status === '1') {
          const data = res.data.forecasts[0];
          resolve(data);
        } else {
          reject(res.data);
        }
      });
  });
};

const getRusticLoveWords = () => {
  return new Promise((resolve, reject) => {
    axios
      // @ts-ignore
      .get('https://api.lovelive.tools/api/SweetNothings')
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getData,
  getWeather,
  getRusticLoveWords,
};
