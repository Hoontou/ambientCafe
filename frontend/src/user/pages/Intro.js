import react from 'react';

import logo from '../../img/intro/logo2.jpg';
import vid from '../../img/intro/vid3.mp4';

import './Intro.scss';

const Intro = () => {
  return (
    <div class='intro-page'>
      <div class='intro-icon'>
        <div class='intro-logo'>
          <img src={logo} />
        </div>
        <div class='intro-ambient'>AMBIENT</div>
      </div>
      <div class='intro-vid-div'>
        <video
          class='video_wrapper'
          src={vid}
          autoplay='autoplay'
          muted='muted'
          controls
        >
          <source src={vid}></source>
        </video>
      </div>

      <div align='right' class='enter-div'>
        <a class='intro-enter' href='/home'>
          ENTER&gt;
        </a>
      </div>
    </div>
  );
};

export default Intro;
