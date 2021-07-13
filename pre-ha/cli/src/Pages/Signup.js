import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const signupHandler = async () => {
    let payload = {
      username,
      userId,
      password,
    };
    await axios({
      method: 'post',
      url: 'https://localhost:4000/signup',
      data: {
        payload,
      },
    });
  };

  return (
    <>
      <div className="main-box">
        <div className="login-box">
          <h1>회원 가입</h1>
          <span>User name</span>
          <input
            className="input-username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>ID</span>
          <input
            className="input-id"
            type="text"
            onChange={(e) => setUserId(e.target.value)}
          />
          <span>Password</span>
          <input
            className="input-pw"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-box">
            <Link to="/login">
              <button onClick={signupHandler}>Sign in!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
