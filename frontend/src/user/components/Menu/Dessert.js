import react from 'react';

import LightBox from '../../../components/LightBox';
import 게이샤1 from '../../../img/menu/story3.jpg';
import 게이샤2 from '../../../img/menu/story4.jpg';
import 게이샤3 from '../../../img/menu/story5.jpg';

import './Coffee.css';
const 게이샤다 = [게이샤1, 게이샤2, 게이샤3];

const Dessert = () => {
  return (
    <div class='container'>
      <h1 class='fw-bolder stagger-item-menuhead'>FRENCH WAFFLE</h1>
      <hr></hr>
      <div class='mn-margin'>
        <div>
          <LightBox src={게이샤다} menu={'플레인'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'시나몬'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'바질'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'햄치즈'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'로투스'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'그린티'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'초코'} />
        </div>
      </div>
      <h1 class='fw-bolder stagger-item-menuhead'>CROFFLE</h1>
      <hr></hr>
      <div class='mn-margin'>
        <div>
          <LightBox src={게이샤다} menu={'커스터드크림, 과일'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'상하목장 아이스크림'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'크림치즈, 딸기'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'크림치즈, 무화과'} />
        </div>
      </div>
      <h1 class='fw-bolder stagger-item-menuhead'>BISCUIT</h1>
      <hr></hr>
      <div class='mn-margin'>
        <div>
          <LightBox src={게이샤다} menu={'플레인'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'얼그레이'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'레몬'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'버터스카치'} />
        </div>
      </div>
    </div>
  );
};

export default Dessert;
