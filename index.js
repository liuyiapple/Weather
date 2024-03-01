const { params } = require('./src/config/config');
const { getToken } = require('./src/getToken/index');
const { senrMessage } = require('./src/sendMessage/index');
const schedule = require('node-schedule');
const {
  getData,
  getRusticLoveWords,
  getWeather,
} = require('./src/utils/index');
const start = async () => {
  const access_token = await getToken(params);
  console.log('access_token', access_token);
  const weatherDetail = await getWeather();
  const loveText = await getRusticLoveWords();
  const data = {
    NowDay: {
      value: getData(),
      color: '#173177',
    },

    City: {
      value: '上海市浦东新区',
      color: '#173177',
    },
    Weather: {
      value: '天气:' + weatherDetail.casts[0].dayweather,
      color: '#173177',
    },
    Low: {
      value: weatherDetail.casts[0].nighttemp + '°C',
      color: '#173177',
    },
    High: {
      value: weatherDetail.casts[0].daytemp + '°C',
      color: '#173177',
    },
    WhitWeather: {
      value: weatherDetail.casts[0].dayweather,
      color: '#173177',
    },
    NigthWeather: {
      value: weatherDetail.casts[0].nightweather,
      color: '#173177',
    },

    Txt: {
      value: loveText,
      color: '#173177',
    },
  };
  // senrMessage({ access_token, ...params, data })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

const rule = new schedule.RecurrenceRule();
rule.second = 30;
rule.hour = 8;
rule.minute = 0;
// schedule.scheduleJob(rule, () => {
start();
// });
