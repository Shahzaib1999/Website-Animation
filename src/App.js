import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Header } from './Views/Header/Header';
import { FloatingIcons } from './Views/FloatingIcons/FloatingIcons';
import { Laptop } from './Views/Laptop/Laptop';

function App() {
  return (
    <div>
      {/* <div>
        <NavbarCom />
      </div> */}
      <Header />
      <FloatingIcons />
      <div style={{overflow:'hidden'}}>
      <Laptop />

      </div>
    </div>
  );
}

export default App;
