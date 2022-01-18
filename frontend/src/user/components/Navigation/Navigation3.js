import react from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div class='text-center text-white'>
      <header>
        <div>
          <h1>
            <a class='text-center text-white nav-link nav-head' href='/'>
              AMBIENT
            </a>
          </h1>
          <nav class='nav nav-masthead justify-content-center'>
            <a class='nav-link nav-a' href='/story'>
              Story
            </a>
            <a class='nav-link nav-a' href='/menu'>
              Menu
            </a>
            <a class='nav-link nav-a active' href='/gallery'>
              Gallery
            </a>
            <a class='nav-link nav-a' href='#'>
              Store
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
