import react from 'react';

import logo from '../../img/intro/logo2.jpg';
import './Chain.css';

const Chain = () => {
  return (
    <div class='chain-page'>
      <div class='chain-logo'>
        <img src={logo} />
        <div class='chain-moon'>가맹문의</div>
      </div>
      <div class='chain-p text-center'>
        <div class='chain-p1 text-center'>
          엠비언트의 기술과 노하우를 공유할 준비가 돼 있습니다. 커피에 진심이고
          열정이 넘치신 분을 기다리고 있어요.
        </div>
        <div class='chain-p2 text-center'>010 6550 5963</div>
        <div class='chain-p3 text-center'>부담없이 연락주세요.</div>
      </div>
    </div>
  );
};

export default Chain;
