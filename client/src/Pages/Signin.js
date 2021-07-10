import React from 'react';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <>
      <div className="main-box">
        <div className="login-box">
          <h1>회원 가입</h1>
          <span>User name</span>
          <input className="input-id" type="text" />
          <span>ID</span>
          <input className="input-id" type="text" />
          <span>Password</span>
          <input className="input-pw" type="password" />
          <div className="btn-box">
            <Link to="/login">
              <button>Sign in!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
