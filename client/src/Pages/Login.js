import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
  };
  const logoutHandler = () => {
    setIsLogin(false);
  };
  return (
    <>
      {isLogin ? (
        <div className="main-box">
          <div className="login-box">
            <h1>로그인 되었습니다.</h1>
            <h3>유저이름 : </h3>
            <h3>유저 ID : </h3>
            <h3>유저 PW : </h3>
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
            <input className="input-id" type="text" />
            <span>Password</span>
            <input className="input-pw" type="password" />
            <div className="btn-box">
              <button onClick={loginHandler}>로그인 하기</button>
              <Link to="/signin">
                <button>회원가입</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
