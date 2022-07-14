import react from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Navigation.css';

const Navigation = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class='text-center text-white'>
      <header>
        <div>
          <h1>
            <a class='text-center text-white nav-link nav-head' href='/home'>
              AMBIENT
            </a>
          </h1>
          <nav class='nav nav-masthead justify-content-center'>
            <a class='nav-link active nav-a' href='/story'>
              Story
            </a>
            <a class='nav-link nav-a' href='/menu'>
              Menu
            </a>
            <a class='nav-link nav-a' href='/gallery'>
              Gallery
            </a>
            {/* <a class='nav-link nav-a' onClick={handleShow}>
              Store
            </a> */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <p class='store-modal'>스토어는 지금 준비중 입니다!</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='primary' onClick={handleClose}>
                  닫기
                </Button>
              </Modal.Footer>
            </Modal>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
