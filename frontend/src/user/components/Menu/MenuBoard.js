import react from 'react';

import './MenuBoard.css';
import Coffee from './Coffee';
import NonCoffee from './NonCoffee';
import Dessert from './Dessert';

const MenuBoard = ({ menu }) => {
  if (menu === 1) {
    return <Coffee />;
  } else if (menu === 2) {
    return <NonCoffee />;
  } else if (menu === 3) {
    return <Dessert />;
  }
};

export default MenuBoard;
