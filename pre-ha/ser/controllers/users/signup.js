const { users } = require('../../models');

module.exports = async (req, res) => {
  const { userId, username, password } = req.body.payload;
  const userData = await users.findOrCreate({
    where: { userId },
    defaults: {
      name: username,
      password,
    },
  });
  console.log(userData[1]);
  // const userData = await users.findOne({
  //   where: { userId },
  // });
  if (userData) {
    res.status(400).json({ data: null, message: '그런 사람 이미 있습니다...' });
  } else {
    await users
      .create({
        userId,
        name: username,
        password,
      })
      .then(() => {
        res.status(200);
      });
  }
  // * model에 userId가 있는지 확인하기
  // * 없으면 create 하기
};

// const { Users } = require('../../models');

// module.exports = async (req, res) => {
//   //우선 req.body.userId가 DB에 있는지 확인(findOne)
//   const userInfo = await Users.findOne({
//     where: { userId: req.body.userId },
//   });
//   if (userInfo) {
//     //findOne이 있으면 400, invalid request client 쪽에서 "이미 가입된 ID입니다."
//     res.status(400).json({ data: null, message: 'invalid request' });
//   } else {
//     //findOne이 없으면 생성 200, ok client 쪽에서 "회원가입 되었습니다." 로그인화면으로 전환
//     const resultOfCreate = await Users.create({
//       userId: req.body.userId,
//       password: req.body.password,
//       email: req.body.email,
//     });
//     res.json({ data: resultOfCreate, message: `ok` });
//     // res.redirect(200, '/');
//   }

//   //회원가입 버튼을 눌렀을 때 user를 추가하는 것(DB에 있던 없던)
// };

// //DB에는 hashing bcrypt써서 저장
