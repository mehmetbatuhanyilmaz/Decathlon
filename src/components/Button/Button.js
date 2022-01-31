import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='users'>
      <button className='btn'>Users</button>
    </Link>
  );
}
