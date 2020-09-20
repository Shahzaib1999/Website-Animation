import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Header } from './Views/Header/Header';
import { FloatingIcons } from './Views/FloatingIcons/FloatingIcons';
import { Laptop } from './Views/Laptop/Laptop';
import { Volume } from './Views/Volume/Volume';
import { Footer } from './Views/Footer/Footer';

function App() {
  return (
    <div>
      {/* <div>
        <NavbarCom />
      </div> */}
      <Header />
      <FloatingIcons />
      <div style={{ overflow: 'hidden', position: 'relative', zIndex: 999 }}>
        <Laptop />

      </div>
      <Volume />
      <Footer />
    </div>
  );
}

export default App;
