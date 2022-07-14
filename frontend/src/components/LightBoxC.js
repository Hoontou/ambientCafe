import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function LightBox({ src, menu }) {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button class='chain-button' onClick={() => setToggler(!toggler)}>
        가맹문의
      </button>
      <FsLightbox toggler={toggler} sources={src} />
    </>
  );
}

export default LightBox;
