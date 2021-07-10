import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Link to="/login">
        <button>로그인하기</button>
      </Link>
      <Link to="/signin">
        <button>회원가임</button>
      </Link>
    </>
  );
}
