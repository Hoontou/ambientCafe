import react from 'react';

import Navigation from '../components/Navigation/Navigation3';
import Footer from '../components/Footer';
import Slide from '../../components/Slide';

import './Gallery.css';
import img1 from '../../img/galimg/1.jpg';
import img2 from '../../img/galimg/2.jpg';
import img3 from '../../img/galimg/3.jpg';
import img4 from '../../img/galimg/4.jpg';
import img5 from '../../img/galimg/5.jpg';
import img6 from '../../img/galimg/6.jpg';
import img7 from '../../img/galimg/7.jpg';
import img8 from '../../img/galimg/8.jpg';
import img9 from '../../img/galimg/9.jpg';
import img10 from '../../img/galimg/10.jpg';
import img11 from '../../img/galimg/11.jpg';
import img12 from '../../img/galimg/12.jpg';
import img13 from '../../img/galimg/13.jpg';
import img14 from '../../img/galimg/14.jpg';
import img15 from '../../img/galimg/15.jpg';
import img16 from '../../img/galimg/16.jpg';
import img17 from '../../img/galimg/17.jpg';

const div1 = [img1, img2, img3, img4];
const div2 = [img5, img6, img7, img8, img9];
const div3 = [img10, img11, img12, img13, img14];
const div4 = [img15, img16, img17];

const Gallery = () => {
  return (
    <div class='bg text-white gall-fnt'>
      <Navigation />
      <div class='container'>
        <div class='container g-mg text-center'>
          <h1>매장 내부</h1>
          <Slide img={div1} />
        </div>
        <hr></hr>
        <div class='container g-mg text-center'>
          <h1>야외 테라스</h1>
          <Slide img={div2} />
        </div>
        <hr></hr>
        <div class='container g-mg text-center'>
          <h1>포토존</h1>
          <Slide img={div3} />
        </div>
        <hr></hr>
        <div class='container g-mg text-center'>
          <h1>안녕하세요</h1>
          <Slide img={div4} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
