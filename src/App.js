/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from "./pages/Home";
import Footer from './components/Footer';

function App() {
  return (
    <div 
      css={css`
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      `}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
