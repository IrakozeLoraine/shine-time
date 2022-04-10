import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routes';
import Home from './views/Home';
import Nav from './components/Nav';
import About from './views/About';
import Services from './views/Services';
import FAQ from './views/FAQ';
import JoinUs from './views/JoinUs';
import Contact from './views/Contact';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.JOINUS} element={<JoinUs />} />
        <Route path={ROUTES.FAQS} element={<FAQ />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
