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
          <p class='stagger-item main-am'>AMBIENT COFFEE</p>
          <p class='main-text stagger-item main-p'>
            엠비언트가 드리는 편안한 휴식을 만나보세요.
          </p>
          <p class='main-text stagger-item main-p'>
            유학산 자락에서 여러분을 기다리고 있습니다.
          </p>
          <a
            type='button'
            class='btn btn-outline-warning stagger-item about-us'
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
