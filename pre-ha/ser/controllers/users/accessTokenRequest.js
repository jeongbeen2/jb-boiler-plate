const e = require('cors');
const jwt = require('jsonwebtoken');
const { users } = require('../../models');

module.exports = (req, res) => {
  const authorization = req.headers['authorization'];
  const token = authorization.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.ACCESS_SECRET, async (err, data) => {
      const userData = await users.findOne({
        where: { userId: data.userId },
      });
      if (!userData) {
        res
          .status(400)
          .send({ data: null, message: 'token이 변조된것 같은데?' });
      } else {
        let payload = {
          id: userData.id,
          name: userData.name,
          userId: userData.userId,
        };
        res.status(200).send({ data: payload, message: '로그인 완료' });
      }
    });
  } else {
    res.status(400).send({ data: null, message: 'invalid access token' });
  }
};
