import react from 'react';

import './MainHome.css';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer';

const MainHome = () => {
  return (
    <div class='bg-image'>
      <div>
        <Navigation />
      </div>
      <div class='center main-text'>
        <div class='text-center text-white'>
          <h1 class='display-4 fw-normal stagger-item'>AMBIENT COFFEE</h1>
          <p class='lead fw-normal stagger-item'>
            동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.
          </p>
          <p class='lead fw-normal stagger-item'>
            가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세.
          </p>
          <a
            type='button'
            class='btn btn-outline-warning fw-bold stagger-item'
            href='/story'
          >
            About us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
