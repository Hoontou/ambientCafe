import react from 'react';

import LightBox from '../../../components/LightBox';
import 플레인1 from '../../../img/menu/와플/플레인.jpg';
import 시나몬1 from '../../../img/menu/와플/시나몬.jpg';
import 바질1 from '../../../img/menu/와플/바질1.jpg';
import 햄치즈1 from '../../../img/menu/와플/햄치즈1.jpg';
import 로투스1 from '../../../img/menu/와플/로투스.jpg';
import 초코1 from '../../../img/menu/와플/초코.jpg';
import 딸기초코1 from '../../../img/menu/와플/딸기초코.jpg';
import 콘소메1 from '../../../img/menu/와플/콘소메.jpg';
import 크로플A1 from '../../../img/menu/크로플/크로플A.jpg';
import 크로플A2 from '../../../img/menu/크로플/크로플A2.jpg';
import 크로플B1 from '../../../img/menu/크로플/크로플B1.jpg';
import 크로플B2 from '../../../img/menu/크로플/크로플B2.jpg';
import 크로플C1 from '../../../img/menu/크로플/크로플C.jpg';

import './Coffee.css';

const 플레인 = [플레인1];
const 바질 = [바질1];
const 햄치즈 = [햄치즈1];
const 로투스 = [로투스1];
const 초코 = [초코1];
const 딸기초코 = [딸기초코1];
const 콘소메 = [콘소메1];
const 크로플A = [크로플A1, 크로플A2];
const 크로플B = [크로플B1, 크로플B2];
const 크로플C = [크로플C1];
const 시나몬 = [시나몬1];

const Dessert = () => {
  return (
    <div class='container'>
      <h5 class='fw-bolder stagger-item-menuhead'>FRENCH WAFFLE</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin'>
        <p>
          <div>
            <LightBox src={플레인} menu={'Plain ·'} />
          </div>
          <div>
            <LightBox src={시나몬} menu={'Cinnamon ·'} />
          </div>
          <div>
            <LightBox src={콘소메} menu={'Consomme ·'} />
          </div>
          <div>
            <LightBox src={바질} menu={'Basil ·'} />
          </div>
          <div>
            <LightBox src={햄치즈} menu={'Hamcheese ·'} />
          </div>
          <div>
            <LightBox src={로투스} menu={'Lotus ·'} />
          </div>
          <div>
            <LightBox src={초코} menu={'Choco ·'} />
          </div>
          <div>
            <LightBox src={딸기초코} menu={'Strawberry choco ·'} />
          </div>
        </p>
      </div>
      <h5 class='fw-bolder stagger-item-menuhead'>CROFFLE</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin'>
        <p>
          <div>
            <LightBox src={크로플A} menu={'Custard cream, Fruits ·'} />
          </div>
          <div>
            <LightBox src={크로플B} menu={'Shanghafarm icecream ·'} />
          </div>
          <div>
            <LightBox src={크로플C} menu={'Creamcheese, Strawberry ·'} />
          </div>
        </p>
      </div>
      <h5 class='fw-bolder stagger-item-menuhead'>BISCUIT</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin'>
        <p>
          <div>
            <button class='mn-lb'>Plain</button>
          </div>
          <div>
            <button class='mn-lb'>Earl gray</button>
          </div>
          <div>
            <button class='mn-lb'>Lemon</button>
          </div>
          <div>
            <button class='mn-lb'>Butterscotch</button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Dessert;
