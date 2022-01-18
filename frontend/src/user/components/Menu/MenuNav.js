import react from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './MenuNav.css';

const MenuNav = (props) => {
  return (
    <div class='text-center text-white'>
      <nav class='nav nav-masthead justify-content-center menu-in-nav'>
        <Link to='/menu/coffee' class='menubtn nav-link1 fw-normal'>
          <h1>커피</h1>
        </Link>
        <Link to='/menu/noncoffee' class='menubtn nav-link1 fw-normal'>
          논커피
        </Link>
        <Link to='/menu/dessert' class='menubtn nav-link1 fw-normal'>
          디저트
        </Link>
      </nav>
    </div>
  );
};

export default MenuNav;
