import react from 'react';

import LightBox from '../../../components/LightBox';

import './Coffee.css';

import 게이샤1 from '../../../img/menu/story3.jpg';
import 게이샤2 from '../../../img/menu/story4.jpg';
import 게이샤3 from '../../../img/menu/story5.jpg';
import 게이샤샤 from '../../../img/menu/게이샤.jpg';
import 에티오피아 from '../../../img/menu/에티오피아.jpg';
import 디카페인 from '../../../img/menu/디카페인.jpg';
import 메이데이 from '../../../img/menu/메이데이.jpg';
import 라떼1 from '../../../img/menu/라떼1.jpg';
import 라떼2 from '../../../img/menu/라떼2.jpg';
import 아이스크림커피1 from '../../../img/menu/아이스크림커피12.jpg';
const 게이샤 = [게이샤1, 게이샤2, 게이샤3];
const 게이샤다 = [게이샤샤];
const 에티오피아다 = [에티오피아];
const 메이데이다 = [메이데이];
const 디카페인다 = [디카페인];
const 라떼 = [라떼1, 라떼2];
const 아이스크림커피 = [아이스크림커피1];

const Coffee = () => {
  return (
    <div class='container'>
      <h1 class='fw-bolder stagger-item-menuhead'>BREWING COFFEE</h1>
      <hr></hr>
      <div class='mn-margin'>
        <p>
          <h5 class='원두타입'>[Light Type]</h5>
          <div>
            <LightBox src={게이샤다} menu={'콜롬비아 게이샤'} />
          </div>
          <div>
            <LightBox src={에티오피아다} menu={'에티오피아'} />
          </div>
        </p>
        <p>
          <h5 class='원두타입'>[Medium Type]</h5>
          <div>
            <LightBox src={메이데이다} menu={'메이데이'} />
          </div>
        </p>
        <p>
          <h5 class='원두타입'>[Dark Type]</h5>
          <div>
            <LightBox src={디카페인다} menu={'디카페인'} />
          </div>
        </p>
      </div>
      <h1 class='fw-bolder stagger-item-menuhead'>ESPRESSO</h1>
      <hr></hr>
      <div class='mn-margin stagger-item-menu'>
        <p>
          <div>
            <LightBox src={라떼} menu={'라떼'} />
          </div>
          <div>
            <LightBox src={게이샤} menu={'바닐라 라떼'} />
          </div>
          <div>
            <LightBox src={게이샤} menu={'아인슈페너'} />
          </div>
          <div>
            <LightBox src={아이스크림커피} menu={'아이스크림 커피'} />
          </div>
        </p>
      </div>
      <h1 class='fw-bolder stagger-item-menuhead'>COLD BREW</h1>
      <hr></hr>
      <div class='mn-margin stagger-item-menu'>
        <p>
          <div>
            <LightBox src={게이샤} menu={'블랙'} />
          </div>
          <div>
            <LightBox src={게이샤} menu={'화이트'} />
          </div>
          <div>
            <LightBox src={게이샤} menu={'크림 바닐라'} />
          </div>
          <div>
            <LightBox src={게이샤} menu={'앰비언트 커피'} />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Coffee;
