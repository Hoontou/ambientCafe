import react from 'react';

import LightBox from '../../../components/LightBox';

import 게이샤1 from '../../../img/menu/story3.jpg';
import 게이샤2 from '../../../img/menu/story4.jpg';
import 게이샤3 from '../../../img/menu/story5.jpg';

import './Coffee.css';

const 게이샤다 = [게이샤1, 게이샤2, 게이샤3];

const NonCoffee = () => {
  return (
    <div class='container'>
      <h1 class='fw-bolder stagger-item-menuhead'>NON COFFEE</h1>
      <hr></hr>
      <div class='mn-margin'>
        <div>
          <LightBox src={게이샤다} menu={'상하목장 아이스크림'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'딥초코 라떼'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'그린티 라떼'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'흑임자 라떼'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'토피넛 라떼'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'알밤 라떼'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'딸기 라떼'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'과일 요거트'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'뱅쇼'} />
        </div>
      </div>
      <h1 class='fw-bolder stagger-item-menuhead'>JUICE</h1>
      <hr></hr>
      <div class='mn-margin'>
        <div>
          <LightBox src={게이샤다} menu={'당근 & 사과'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'오렌지'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'바나나'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'키위'} />
        </div>
      </div>
      <h1 class='fw-bolder stagger-item-menuhead'>ADE</h1>
      <hr></hr>
      <div class='mn-margin'>
        <div>
          <LightBox src={게이샤다} menu={'자몽'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'청포도'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'애플시나몬'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'패션후르츠'} />
        </div>
      </div>
      <h1 class='fw-bolder stagger-item-menuhead'>TEA</h1>
      <hr></hr>
      <div class='mn-margin'>
        <div>
          <LightBox src={게이샤다} menu={'자몽티'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'얼그레이'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'베리루이보스'} />
        </div>
        <div>
          <LightBox src={게이샤다} menu={'핑크유자티'} />
        </div>
      </div>
    </div>
  );
};

export default NonCoffee;
