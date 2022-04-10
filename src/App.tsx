import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routes';
import Home from './views/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        {/* <Route path={ROUTES.ABOUT} element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
