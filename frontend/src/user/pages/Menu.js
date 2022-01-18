import react from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation2';
import Footer from '../components/Footer';
import MenuBoard from '../components/Menu/MenuBoard';

import './Menu.css';

const Menu = () => {
  const [menu, setMenu] = useState(1);
  const set1 = () => {
    setMenu(1);
  };
  const set2 = () => {
    setMenu(2);
  };
  const set3 = () => {
    setMenu(3);
  };
  return (
    <div class='bg'>
      <Navigation />
      <div class='text-center text-white bt-div'>
        <nav class='nav nav-masthead justify-content-center'>
          <button class='menubtn nav-link1 fw-normal bt' onClick={set1}>
            커피
          </button>
          <button class='menubtn nav-link1 fw-normal bt' onClick={set2}>
            음료
          </button>
          <button class='menubtn nav-link1 fw-normal bt' onClick={set3}>
            디저트
          </button>
        </nav>
      </div>
      <div class='text-white'>
        <MenuBoard menu={menu} />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
