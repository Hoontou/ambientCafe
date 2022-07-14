import react from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './user/pages/Intro';
import MainHome from './user/pages/MainHome';
import Story from './user/pages/Story';
import Menu from './user/pages/Menu';
import Gallery from './user/pages/Gallery';
import Chain from './user/pages/Chain';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='/home' element={<MainHome />}></Route>
        <Route path='/story' element={<Story />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/chain' element={<Chain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
