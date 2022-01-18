import react from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slide = ({ img }) => {
  return (
    <AwesomeSlider>
      {img.map((i) => (
        <div data-src={i} />
      ))}
    </AwesomeSlider>
  );
};

export default Slide;
