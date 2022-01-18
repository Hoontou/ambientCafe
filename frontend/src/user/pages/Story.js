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
          <h1 class='display-5 fw-bold'>드립 커피</h1>
          <p class='fs-4'>
            조선왕조실록에 1397년 음력 4월 10일(양력 환산시 5월 15일)에 당시
            정안군이었던 이방원과 군부인이었던
          </p>
        </div>
      </div>
      <div class='story2'>
        <div class='text-white story2-p'>
          <h1 class='display-5 fw-bold'>원두 종류</h1>
          <p class='fs-4'>
            조선의 제4대 국왕. 묘호는 세종(世宗), 시호는
            장헌영문예무인성명효대왕(莊憲英文睿武仁聖明孝大王), 본명는
            이도(李祹), 자는 원정(元正), 아명은 막동(莫同, 막내)이었다.
          </p>
        </div>
      </div>
      <div class='story3'>
        <div class='text-white story3-p'>
          <h1 class='display-5 fw-bold'>프렌치 와플</h1>
          <p class='fs-4'>
            충녕대군은 분명히 왕위에 욕심이 있었다. 큰형은 인간말종이고, 어차피
            첫째가 아니라면 둘째인가,
          </p>
        </div>
      </div>
      <div class='story4'>
        <div class='text-white story4-p'>
          <h1 class='display-5 fw-bold'>음료</h1>
          <p class='fs-4'>가나다라마바사</p>
        </div>
      </div>
      <div class='story5'>
        <div class='text-white story5-p'>
          <h1 class='display-5 fw-bold'>냥이 두마리</h1>
          <p class='fs-4'>
            1418년 6월 3일 태종은 세자를 폐하고 충녕대군을 새로운 세자로
            책봉한다. 처음에는 양녕대군의 장남인 순성군을 세우겠다고 했으나 박은
            등 대신들이 반발해 뜻을 거둔다. 다음으로는 점을 쳐서 세자를
            정하겠다고 했으나 다시 의견을 바꾸고 어진 사람을 골라야 한다는
            이유로 충녕대군을 세자로 지명한다.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Story;
