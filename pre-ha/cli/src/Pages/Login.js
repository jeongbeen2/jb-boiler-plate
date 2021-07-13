import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const loginHandler = async () => {
    await axios({
      method: 'post',
      url: 'https://localhost:4000/login',
      data: { userId, password },
    })
      .then((json) => {
        const { accessToken } = json.data.data;
        axios({
          method: 'get',
          url: 'https://localhost:4000/accesstokenrequest',
          data: {
            withCredentials: true,
          },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }).then((json) => {
          const { id, name, userId } = json.data.data;
          console.log(id, name, userId);
          setUsername(name);
          setIsLogin(true);
        });
      })
      .catch((err) => {
        alert('그런 사람 또 없습니다..');
      });
  };
  const logoutHandler = () => {
    setUserId('');
    setPassword('');
    setUsername('');
    setIsLogin(false);
  };
  return (
    <>
      {isLogin ? (
        <div className="main-box">
          <div className="login-box">
            <h1>로그인 되었습니다.</h1>
            <h3>유저이름 : {username}</h3>
            <h3>유저 ID : {userId}</h3>
            <div className="btn-box">
              <button onClick={logoutHandler}>로그아웃 하기</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="main-box">
          <div className="login-box">
            <h1>로그인이 필요합니다.</h1>
            <span>ID</span>
            <input
              className="input-id"
              type="text"
              onChange={(e) => setUserId(e.target.value)}
              value={userId}
            />
            <span>Password</span>
            <input
              className="input-pw"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="btn-box">
              <button onClick={loginHandler}>로그인 하기</button>
              <Link to="/signup">
                <button>회원가입</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
