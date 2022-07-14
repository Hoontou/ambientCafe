import react from 'react';

import './Story.css';
import Navigation from '../components/Navigation/Navigation1';
import Footer from '../components/Footer';

const Story = () => {
  return (
    <div class='bg story-text'>
      <Navigation />
      <div class='story1'>
        <div class='text-white story1-p'>
          <p class='story-head'>Brewing Coffee</p>
          <p class='story-p'>
            엠비언트 바리스타만의 노하우로 드립커피의 매력을 선보입니다.
          </p>
        </div>
      </div>
      <div class='story2'>
        <div class='text-white story2-p'>
          <p class='story-head'>Specialty Coffee Bean (SCAA)</p>
          <p class='story-p'>
            세계 각지의 고급 원두를 엄선하여 다양한 향과 맛을 제공합니다.
          </p>
        </div>
      </div>
      <div class='story3'>
        <div class='text-white story3-p'>
          <p class='story-head'>Dessert</p>
          <p class='story-p'>
            프랑스에서 온 크로와상으로&nbsp; 매일매일 크로플을 굽고있어요.
          </p>
        </div>
      </div>
      <div class='story4'>
        <div class='text-white story4-p'>
          <p class='story-p'>
            엠비언트와 함께 성장하실 점주님을 기다립니다. 부담 없이 문의주세요!
          </p>
          <p class='story-chain'>
            <a href='/chain'>가맹문의 바로가기</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Story;
