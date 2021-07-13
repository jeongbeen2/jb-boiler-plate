const jwt = require('jsonwebtoken');
const { users } = require('../../models');
module.exports = async (req, res) => {
  const userData = await users.findOne({
    where: { userId: req.body.userId, password: req.body.password },
  });
  if (!userData) {
    res.status(400).send({
      data: null,
      message: '그런 사람 또 없습니다..',
    });
  } else {
    const payload = {
      name: userData.name,
      userId: userData.userId,
      createdAt: userData.createdAt,
      updatedAt: userData.updatedAt,
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: '1h',
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: '3h',
    });
    res
      .status(200)
      .cookie('refreshToken', refreshToken, {
        Secure: true,
      })
      .send({
        data: { accessToken },
        message: '그런 사람 있습니다..',
      });
  }
};
