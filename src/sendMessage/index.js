const axios = require('axios');
const senrMessage = (params) => {
  const { touser, template_id, data = {}, access_token } = params;
  // @ts-ignore
  return axios.post(
    `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${access_token}`,
    {
      touser: touser,
      template_id: template_id,
      data: data,
    }
  );
};

module.exports = {
  senrMessage,
};
