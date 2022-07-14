import react from 'react';

import Navigation from '../components/Navigation/Navigation3';
import Footer from '../components/Footer';
import Slide from '../../components/Slide';

import './Gallery.css';

import 커피1 from '../../img/gall/커피관련/1.jpg';
import 커피2 from '../../img/gall/커피관련/2.jpg';
import 커피3 from '../../img/gall/커피관련/3.jpg';

import 내부1 from '../../img/gall/매장내부/1.jpg';
import 내부2 from '../../img/gall/매장내부/2.jpg';
import 내부3 from '../../img/gall/매장내부/3.jpg';
import 내부4 from '../../img/gall/매장내부/4.jpg';
import 내부5 from '../../img/gall/매장내부/5.jpg';
import 내부6 from '../../img/gall/매장내부/6.jpg';

import 야외1 from '../../img/gall/야외테라스/1.jpg';
import 야외2 from '../../img/gall/야외테라스/2.jpg';
import 야외3 from '../../img/gall/야외테라스/3.jpg';
import 야외4 from '../../img/gall/야외테라스/4.jpg';
import 야외5 from '../../img/gall/야외테라스/5.jpg';
import 야외6 from '../../img/gall/야외테라스/6.jpg';
import 야외7 from '../../img/gall/야외테라스/7.jpg';
import 야외8 from '../../img/gall/야외테라스/8.jpg';

import 먹을것1 from '../../img/gall/먹을것/1.jpg';
import 먹을것2 from '../../img/gall/먹을것/2.jpg';
import 먹을것3 from '../../img/gall/먹을것/3.jpg';
import 먹을것4 from '../../img/gall/먹을것/4.jpg';
import 먹을것5 from '../../img/gall/먹을것/5.jpg';
import 먹을것6 from '../../img/gall/먹을것/6.jpg';

import 냥이1 from '../../img/gall/냥이/1.jpg';
import 냥이2 from '../../img/gall/냥이/2.jpg';
import 냥이3 from '../../img/gall/냥이/3.jpg';
import 냥이4 from '../../img/gall/냥이/4.jpg';
import 냥이5 from '../../img/gall/냥이/5.jpg';
import 냥이6 from '../../img/gall/냥이/6.jpg';
import 냥이7 from '../../img/gall/냥이/7.jpg';
import 냥이8 from '../../img/gall/냥이/8.jpg';
import 냥이9 from '../../img/gall/냥이/9.jpg';

const 커피 = [커피1, 커피2, 커피3];
const 내부 = [내부1, 내부2, 내부3, 내부4, 내부5, 내부6];
const 야외 = [야외1, 야외2, 야외3, 야외4, 야외5, 야외6, 야외7, 야외8];
const 먹을것 = [먹을것1, 먹을것2, 먹을것3, 먹을것4, 먹을것5, 먹을것6];
const 냥이 = [냥이1, 냥이3, 냥이2, 냥이4, 냥이5, 냥이6, 냥이7, 냥이8, 냥이9];

const Gallery = () => {
  return (
    <div class='bg text-white gall-fnt'>
      <Navigation />
      <div class='container'>
        <div class='container g-mg text-center'>
          <Slide img={커피} />
        </div>
        <hr></hr>
        <div class='container g-mg text-center'>
          <div class='g-text'>Exterior</div>
          <Slide img={야외} />
        </div>
        <hr></hr>
        <div class='container g-mg text-center'>
          <div class='g-text'>Interior</div>
          <Slide img={내부} />
        </div>
        <hr></hr>
        <div class='container g-mg text-center'>
          <Slide img={먹을것} />
        </div>
        <hr></hr>
        <div class='container g-mg text-center'>
          <div>Cream & Cheese</div>
          <Slide img={냥이} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
