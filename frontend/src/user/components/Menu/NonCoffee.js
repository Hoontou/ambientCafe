import react from 'react';

import LightBox from '../../../components/LightBox';

import 상하목장1 from '../../../img/menu/논커피/상하1.jpg';
import 상하목장2 from '../../../img/menu/논커피/상하2.jpg';
import 딸기1 from '../../../img/menu/논커피/딸기라떼.jpg';
import 과일요거 from '../../../img/menu/논커피/과일요거트.jpg';
import 뱅쇼1 from '../../../img/menu/논커피/뱅쇼1.jpg';
import 뱅쇼2 from '../../../img/menu/논커피/뱅쇼2.jpg';
import 애플시나 from '../../../img/menu/에이드/애플시나몬.jpg';
import 자몽에 from '../../../img/menu/에이드/자몽에이드.jpg';
import 스페이스1 from '../../../img/menu/티/스페이스1.jpg';
import 스페이스2 from '../../../img/menu/티/스페이스2.jpg';
import 자몽티1 from '../../../img/menu/티/자몽티.jpg';
import 핑크유자1 from '../../../img/menu/티/핑크유자티.jpg';
import 흑임자1 from '../../../img/menu/논커피/흑임자.jpg';

import './Coffee.css';

const 상하 = [상하목장1, 상하목장2];
const 딸기 = [딸기1];
const 과일요거트 = [과일요거];
const 뱅쇼 = [뱅쇼1, 뱅쇼2];
const 애플시나몬 = [애플시나];
const 자몽 = [자몽에];
const 스페이스오디티 = [스페이스1, 스페이스2];
const 자몽티 = [자몽티1];
const 핑크유자티 = [핑크유자1];
const 흑임자 = [흑임자1];

const NonCoffee = () => {
  return (
    <div class='container'>
      <h5 class='fw-bolder stagger-item-menuhead'>NON COFFEE</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin'>
        <p>
          <div>
            <LightBox src={상하} menu={'Sanghafarm Icecream ·'} />
          </div>
          <div>
            <button class='mn-lb'>Choco</button>
          </div>
          <div>
            <button class='mn-lb'>Green tea</button>
          </div>
          <div>
            <LightBox src={흑임자} menu={'Black sesame ·'} />
          </div>
          <div>
            <button class='mn-lb'>Toffee</button>
          </div>
          <div>
            <LightBox src={딸기} menu={'Strawberry'} />
          </div>
          <div>
            <LightBox src={과일요거트} menu={'Greek yogurt with fruit ·'} />
          </div>
          <div>
            <LightBox src={뱅쇼} menu={'Vin chaud ·'} />
          </div>
        </p>
      </div>
      <h5 class='fw-bolder stagger-item-menuhead'>JUICE</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin'>
        <p>
          <div>
            <button class='mn-lb'>Carrot & Apple</button>
          </div>
          <div>
            <button class='mn-lb'>Orange</button>
          </div>
          <div>
            <button class='mn-lb'>Banana</button>
          </div>
          <div>
            <button class='mn-lb'>Kiwi</button>
          </div>
        </p>
      </div>
      <h5 class='fw-bolder stagger-item-menuhead'>ADE</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin'>
        <p>
          <div>
            <LightBox src={자몽} menu={'Grapefruit ·'} />
          </div>
          <div>
            <button class='mn-lb'>Green grape</button>
          </div>
          <div>
            <LightBox src={애플시나몬} menu={'Apple cinnamon ·'} />
          </div>
          <div>
            <button class='mn-lb'>Passion fruits</button>
          </div>
        </p>
      </div>
      <h5 class='fw-bolder stagger-item-menuhead'>TEA</h5>
      <hr class='stagger-item-menuhead'></hr>
      <div class='mn-margin'>
        <p>
          <div>
            <LightBox src={자몽티} menu={'Grapefruit ·'} />
          </div>
          <div>
            <button class='mn-lb'>Earl gray</button>
          </div>
          <div>
            <button class='mn-lb'>Berry rooibos</button>
          </div>
          <div>
            <LightBox src={핑크유자티} menu={'Pink yuja ·'} />
          </div>
          <div>
            <LightBox src={스페이스오디티} menu={'Space mulberry ·'} />
          </div>
        </p>
      </div>
    </div>
  );
};

export default NonCoffee;
