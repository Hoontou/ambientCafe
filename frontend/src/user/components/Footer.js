import react from 'react';

import './Footer.css';
import naver from '../pages/img/naver.png';
import instagram from '../pages/img/instagram.png';

const Footer = () => {
  return (
    <div class='container foot'>
      <footer class='d-flex flex-wrap justify-content-between align-items-center my-2 border-top'>
        <p class='col-md-4 mb-0 text-white foot-email'>
          Contact) ambient@gmail.com
        </p>
        <div class='col-md- d-flex align-items-center text-white'></div>
        <ul class='nav col-md-4 justify-content-end list-unstyled d-flex text-white'>
          <li class='ms-3'>
            <a
              class='link'
              href='https://map.naver.com/v5/entry/place/1095863352?c=14302645.3374810,4309159.5652651,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt'
              target='_blank'
            >
              <img class='naver' src={naver} />
            </a>
          </li>
          <li class='ms-3'>
            <a
              class='link'
              href='https://www.instagram.com/_ambient_coffee/'
              target='_blank'
            >
              <img class='instagram' src={instagram} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
